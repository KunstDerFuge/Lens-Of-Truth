from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    bio = models.TextField(max_length=400, blank=True)
    is_trusted_contributor = models.BooleanField(default=False)

    REQUIRED_FIELDS = ['email', 'first_name', 'last_name']

    @classmethod
    def get_n_random_users(cls, n: int):
        """
        Get RawQuerySet of up to N random Users. May contain duplicates.
        :param n: Number of random User objects requested.
        :return: RawQuerySet of <= N random User objects.
        """
        # Source of this recursive random query:
        # https://www.postgresql.org/message-id/CAL_0b1v-wu0NCuo96B_6BSBrRgWQS%2BYw3Ry5mUEAVtVVtuKx-w%40mail.gmail.com
        random_users = User.objects.raw(
            '''WITH RECURSIVE r AS (
                WITH b AS (SELECT min(id), max(id) FROM users_user)
                (
                    SELECT id, min, max, array[]::integer[] AS a, 0 AS n
                    FROM users_user, b
                    WHERE id > min + (max - min) * random()
                    LIMIT 1
                ) UNION ALL (
                    SELECT t.id, min, max, a || t.id, r.n + 1 AS n
                    FROM users_user AS t, r
                    WHERE
                        t.id > min + (max - min) * random() AND
                        t.id <> all(a) AND
                        r.n + 1 < %s
                    LIMIT 1
                )
            )
            SELECT t.id FROM users_user AS t, r WHERE r.id = t.id;
            ''', [n])

        return random_users
