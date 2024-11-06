{
    //
    interface myProfile{
        name: string;
        age: number;
        email: string;
    }
    const myProfile:myProfile={
        name: "Alice",
        age:25,
        email:"alice@example.com",
    }
    function updateProfile(profile:myProfile,updateAge:{age:number}):myProfile{
        profile.age=updateAge.age;
        return profile;
    }
    console.log(updateProfile(myProfile, { age: 26 }));
    //
}