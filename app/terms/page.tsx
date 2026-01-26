"use client";

import PageLayout from "../components/PageLayout";
import { PageHero } from "../components/ParallaxHero";
import { FadeInUp } from "../components/animations";

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHero
        badge="Legal"
        title="Terms of Service"
        description="Website Terms and Conditions of Use"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-600 mb-8">
                This website (including all sub-sites) is operated by Goldman & Co. By accessing a Goldman website, interface, or platform (collectively, "Site" or "Sites") that links to this Terms of Use Agreement (the "Terms of Use" or "Agreement"), you agree to abide by this Agreement and by our Privacy Policy (which is hereby incorporated by reference), regardless of the device used (e.g., personal computer, mobile device, or any other technology or software) for access. These Terms of Use govern your access to, and use of, the Sites and any of the tools, features, functionality, services, or products offered on or through the Sites, including your access to information and data; your use of any web portal, customer account, sales partner account, syndicate investor account, or online services; your submission of applications and/or provision of information for qualification for financing or other purposes; your subscription to blogs, newsletters, and similar content; and your participation in any public areas on the Sites (collectively, the "Services")
              </p>

              <p className="text-slate-600 mb-8">
                In addition to these Terms of Use and the Privacy Policy, certain of our services offered through the Sites, such as your ability to submit requests for commercial revenue-based financing and related services, will be subject to, and governed by, separate terms and conditions or contracts that will be provided to you, and that you must agree to, in connection with those requests or transactions. To the extent there is a conflict between these Terms of Use and a transaction-specific agreement, the transaction-specific agreement will govern.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
                <p className="text-slate-700 font-medium">
                  PLEASE READ THESE TERMS OF USE CAREFULLY TO UNDERSTAND EACH PROVISION. THIS CONSTITUTES A LEGAL AGREEMENT BETWEEN YOU AND GOLDMAN FINANCIAL FOR THE USE OF THE SERVICES, AND THE TERMS OF USE SHALL APPLY TO ALL USERS OF THE SITES. IF YOU DO NOT AGREE TO THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITES, SERVICES, AND/OR CONTENT.
                </p>
              </div>

              <p className="text-slate-600 mb-12">
                We may update these Terms of Use from time to time by making available a revised, dated version on the Sites. If the revised version includes a substantial change, we will provide a more prominent notice (including, for certain services, an email or other type of notification of Terms of Use changes) prior to the change becoming effective. Your continued use of the Sites shall constitute your acceptance of such updated Terms of Use. We encourage you to periodically review this page for the latest information.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. USE OF SITES</h2>
              <p className="text-slate-600 mb-6">
                You may view and use the Sites and/or any of the information or Services only in accordance with these Terms of Use. You agree to use the Sites and/or Services only for lawful purposes and acknowledge that your failure to do so may subject you to civil and criminal liability as determined by applicable law. The Sites are for individual business owners and legal entities organized and authorized to do business in the United States and are not intended for use by others or for use outside of the United States. To access certain features of the Site, you may need to register for an account and to provide us with certain documentation or information, including information about your identity, finances, and business performance. By creating or accessing a user account, submitting a request for revenue-based financing, and/or otherwise using the Sites, you represent and warrant that:
              </p>

              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>You are 18 years old or older and are fully able to enter into a binding agreement;</li>
                <li>All information and/or documentation you submit is true, accurate, current, and complete;</li>
                <li>You will update such information, as necessary, to keep it true, accurate, current, and complete; and</li>
                <li>The information belongs to you and does not infringe or violate any patents, copyrights, trademarks, or other intellectual property, proprietary, or privacy rights of any third party.</li>
              </ul>

              <p className="text-slate-600 mb-12">
                Goldman & Co reserves the right, at its sole discretion, to restrict in whole or in part, your access to, and use of, the Sites, Services, and Site content at any time, with or without notice, and for any or no reason.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. PROHIBITIONS ON USE</h2>
              <p className="text-slate-600 mb-6">
                You agree that you will not violate any law, contract, intellectual property, or other third-party rights, and that you are solely responsible for your conduct while accessing or using the Sites or using the Services. As noted above, the Sites and Services may only be used for lawful purposes and in accordance with this Agreement. Additionally, you specifically agree that you will not:
              </p>

              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Provide false or misleading information to Goldman & Co, impersonate any person or entity, or misrepresent your affiliation with a person or entity;</li>
                <li>Use the Site in any manner that violates any federal, state, international, or local law or regulation, or engage in, facilitate, encourage, or promote any activity that violates the Terms of Use;</li>
                <li>Use the Site in any manner that could interfere with, disrupt, negatively affect, or inhibit other users from fully enjoying the Site, or that could damage, disable, overburden, or impair the functioning of the Site in any manner;</li>
                <li>Reverse engineer any aspect of the Site, or do anything that might discover source code or bypass or circumvent measures employed to prevent or limit access to any service, area, or code of the Site;</li>
                <li>Use the Site in any manner that could threaten, bypass, or destroy any security mechanism used with or incorporated in the Site;</li>
                <li>Post or otherwise transmit any content, data, or material that contains viruses, spyware, spiders, robots, worms, Trojan horses, logic bombs, or any other type of malicious or deleterious programs;</li>
                <li>Use or attempt to use another user's account without authorization from such user and Goldman & Co;</li>
                <li>Post or otherwise transmit any unsolicited or unauthorized advertising, promotional materials, "junk mail", "spam", "chain letters", "pyramid schemes", or any other material that contains business solicitations of any type.</li>
              </ul>

              <p className="text-slate-600 mb-12">
                Goldman & Co reserves the right to enforce these prohibitions and remove or restrict access at its sole discretion.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. ACCOUNT SECURITY</h2>
              <p className="text-slate-600">
                Each user is responsible for any misuse of their account, even if the inappropriate activity was committed by someone other than the account holder (e.g., a family member, friend, or employee). Therefore, each user must take all reasonable steps to protect their account from unauthorized access. Users must ensure the security of their password, including by not sharing it with others for any reason, creating strong passwords, and updating passwords regularly. Goldman & Co reserves the right to terminate your access to the Sites or cancel your username and password at any time, without notice, and for any reason including, without limitation, your violation of these Terms of Use.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>
    </PageLayout>
  );
}
