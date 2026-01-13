import React from "react";
import Link from "next/link";

const Location = () => {
  return (
    <>
      <section className="bg-[#F8F9FA] dark:bg-[#101622] py-14">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-6 shadow-xl backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">
                Visit Us
              </p>
              <h3 className="mt-4 text-3xl font-bold text-[#101622] dark:text-white">
                Nairobi Collaboration Hub
              </h3>
              <p className="mt-3 text-base text-[#495057] dark:text-gray-300">
                Ground Floor, Kasarani Innovation Centre, Nairobi, Kenya.
                Available for client meetings Monday - Friday, 9am - 6pm EAT.
              </p>
              <dl className="mt-6 space-y-3 text-sm text-[#495057] dark:text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    phone_in_talk
                  </span>
                  <Link href="tel:+254742630973" className="hover:text-primary">
                    +254 742 630 973
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                  <Link
                    href="mailto:hamisigad77@gmail.com"
                    className="hover:text-primary"
                  >
                    hamisigad77@gmail.com
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    schedule
                  </span>
                  <p>Mon - Fri · 9:00am - 6:00pm (EAT)</p>
                </div>
              </dl>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
              <iframe
                title="Nairobi Headquarters Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7988.501805988184!2d36.88549753973926!3d-1.2139334213647126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1562b42f14c3%3A0xfdfd63a9863d0c91!2sKasarani%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1732135591154!5m2!1sen!2ske"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
