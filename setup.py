from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in etiba/__init__.py
from etiba import __version__ as version

setup(
	name="etiba",
	version=version,
	description="Captura de pesos",
	author="Humberto Chitay & Josue Velasquez",
	author_email="soporte@chappsa.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
