from .models import *


class MainUser(models.Model):
    TYPES = (
        ("Influencer", "Influencer"),
        ("General", "General"),
        ("SuperAdmin", "SuperAdmin")
    )
    userType = models.CharField(choices=TYPES, null=False, max_length=100)
    email = models.EmailField(unique=True, null=False)
    # username = models.CharField(max_length=200, null=True, default="guest")
    name = models.CharField(max_length=200, null=False, default="guest")
    password = models.CharField(max_length=100, null=True, default="False")
    token = models.CharField(max_length=200, null=False, auto_created=True)
    timestamp = models.DateTimeField(auto_now=True, auto_created=True)

    @classmethod
    def post_create(cls, sender, instance, created, *args, **kwargs):
        if not created:
            return
        else:
            key = Fernet.generate_key()  # this is your "password"
            cipher_suite = Fernet(key)

            if cls.userType is "Influencer":
                influence = Influence.objects.create(
                    user=cls,
                    spotifyToken="",
                    appleToken="",
                    authToken=cls.token,
                    faceBookToken=""
                )
                keystore = KeyVault.objects.create(
                    user=influence,
                    key=key
                )
                keystore.save()
                cls.password = cipher_suite.encrypt(cls.password)
                cls.save()

            elif cls.userType is "General":
                general = General.object.create(
                    user=cls,
                    spotifyToken="",
                    appleToken="",
                    authToken=cls.token,
                    faceBookToken=""
                )
                keystore = KeyVault.objects.create(
                    user=general,
                    key=key
                )
                keystore.save()
                cls.password = cipher_suite.encrypt(cls.password)
                cls.save()

            else:
                superuser = SuperAdmin.objects.create(
                    user=cls
                )
                keystore = KeyVault.objects.create(
                    user=superuser,
                    key=key
                )
                keystore.save()
                cls.password = cipher_suite.encrypt(cls.password)
                cls.save()
        # ...what needs to happen on create


post_save.connect(MainUser.post_create, sender=MainUser)
