import React from "react";

export default function Team({ team }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Meet the amazing people who keep the server up and running.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {team?.map((member, i) => (
            <div key={i} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt={member.name}
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
                  src={`https://mc-heads.net/avatar/${member.name}/64`}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    {member.name}
                  </h2>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
