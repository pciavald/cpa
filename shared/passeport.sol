contract Passport
{
	struct Diploma
	{
		address school;
		string name;
		uint level;
	}

	struct Fromation
	{
		address school;
		string name;
		bool finished;
	}

	struct Activity
	{
		address organism;
		string name;
		uint from;
		uint to;
	}

	struct Employment
	{
		string siret;
	}

	struct Profile
	{
	}



}
