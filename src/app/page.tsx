"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Shield, Heart, Sparkles, Zap, Star, HelpCircle, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="aurora"
      cardStyle="glass-depth"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            {"name":"About","id":"about"},
            {"name":"Procedures","id":"feature"},
            {"name":"Reviews","id":"testimonial"},
            {"name":"FAQ","id":"faq"},
            {"name":"Contact","id":"contact"}
          ]}
          brandName="Elite Cosmetic Surgery"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Expert Breast Augmentation Surgery"
          description="Transform your confidence with personalized breast enhancement procedures performed by board-certified plastic surgeons. Schedule your consultation today."
          tag="Board-Certified Surgeons"
          tagIcon={Award}
          buttons={[
            {"text":"Schedule Consultation","href":"contact"},
            {"text":"View Procedures","href":"feature"}
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394969132-zopusm5s.jpg"
          imageAlt="Professional plastic surgeon consultation"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We are committed to delivering exceptional results with the highest standards of safety, precision, and personalized care for every patient."
          features={[
            {
              "icon":Award,
              "title":"Board-Certified Excellence",
              "description":"Our surgeons are board-certified plastic surgeons with extensive training and years of specialized experience in breast enhancement procedures."
            },
            {
              "icon":Shield,
              "title":"Safety First Approach",
              "description":"We maintain the highest safety standards with accredited surgical facilities and comprehensive pre and post-operative care protocols."
            },
            {
              "icon":Heart,
              "title":"Personalized Care",
              "description":"Every procedure is tailored to your unique anatomy and aesthetic goals with detailed consultations and personalized treatment plans."
            },
            {
              "icon":Sparkles,
              "title":"Natural Results",
              "description":"Our advanced techniques and artistic approach ensure beautiful, natural-looking results that enhance your confidence and well-being."
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSeven
          title="Our Procedures"
          description="Comprehensive breast enhancement procedures tailored to your individual needs and aesthetic goals"
          tag="Surgical Excellence"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              "id":1,
              "title":"Breast Augmentation",
              "description":"Enhance breast size and shape with silicone or saline implants. Customized to achieve your desired look while maintaining natural proportions.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394970760-mv081mo3.jpg",
              "imageAlt":"Breast augmentation consultation"
            },
            {
              "id":2,
              "title":"Breast Lift (Mastopexy)",
              "description":"Restore youthful breast position and firmness by removing excess skin and reshaping breast tissue for a more lifted appearance.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394971287-kk0gor5h.jpg",
              "imageAlt":"Breast lift procedure consultation"
            },
            {
              "id":3,
              "title":"Breast Reduction",
              "description":"Reduce breast size to alleviate physical discomfort and achieve better proportions while maintaining attractive breast shape.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394971867-tr6x7v1i.jpg",
              "imageAlt":"Breast reduction consultation"
            },
            {
              "id":4,
              "title":"Breast Reconstruction",
              "description":"Restore breast shape and volume following mastectomy or trauma using advanced reconstructive techniques and implants.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394972595-bdruyemi.jpg",
              "imageAlt":"Breast reconstruction consultation"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="Patient Testimonials"
          description="Real stories from our satisfied patients who have experienced life-changing results"
          tag="Success Stories"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              "id":"1",
              "name":"Sarah M.",
              "handle":"@sarah_m",
              "testimonial":"The entire experience exceeded my expectations. Dr. Smith and her team were professional, caring, and the results are absolutely beautiful. I feel so much more confident now.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394973298-m1csigrp.jpg",
              "imageAlt":"Patient testimonial from Sarah"
            },
            {
              "id":"2",
              "name":"Jennifer L.",
              "handle":"@jen_l",
              "testimonial":"From consultation to recovery, everything was explained clearly and thoroughly. The surgical facility was pristine and the staff made me feel comfortable throughout the entire process.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394974055-mqeeu85k.jpg",
              "imageAlt":"Patient testimonial from Jennifer"
            },
            {
              "id":"3",
              "name":"Maria R.",
              "handle":"@maria_r",
              "testimonial":"I researched extensively before choosing this practice. Their reputation for safety and natural results is well-deserved. I couldn't be happier with my decision.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394974763-1znilcva.jpg",
              "imageAlt":"Patient testimonial from Maria"
            },
            {
              "id":"4",
              "name":"Lisa K.",
              "handle":"@lisa_k",
              "testimonial":"The personalized care and attention to detail was remarkable. They listened to my concerns and delivered exactly what I hoped for. Highly recommend their expertise.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394975267-jm61c6su.jpg",
              "imageAlt":"Patient testimonial from Lisa"
            },
            {
              "id":"5",
              "name":"Amanda T.",
              "handle":"@amanda_t",
              "testimonial":"Recovery was much smoother than expected thanks to their comprehensive post-op care instructions. The results look completely natural and I feel amazing.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394976169-lnmdl4t1.jpg",
              "imageAlt":"Patient testimonial from Amanda"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Get answers to common questions about breast augmentation procedures, recovery, and what to expect"
          tag="Questions & Answers"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              "id":"1",
              "title":"How long does breast augmentation surgery take?",
              "content":"Breast augmentation surgery typically takes 1-2 hours depending on the complexity of the procedure. The surgery is performed under general anesthesia in our accredited surgical facility."
            },
            {
              "id":"2",
              "title":"What is the recovery time?",
              "content":"Most patients can return to work within 3-7 days and resume normal activities within 2-3 weeks. Full recovery and final results are typically seen within 3-6 months."
            },
            {
              "id":"3",
              "title":"How do I choose the right implant size?",
              "content":"During your consultation, we'll discuss your goals and use sizing tools to help you visualize different options. We consider your body frame, lifestyle, and desired outcome to recommend the best size."
            },
            {
              "id":"4",
              "title":"Are breast implants safe?",
              "content":"Modern breast implants have an excellent safety record. Both saline and silicone implants are FDA-approved and have been extensively studied. We'll discuss all risks and benefits during consultation."
            },
            {
              "id":"5",
              "title":"Will I have visible scarring?",
              "content":"Incisions are carefully placed to minimize visible scarring. Common locations include under the breast, around the areola, or in the armpit. Scars typically fade significantly over time."
            },
            {
              "id":"6",
              "title":"How long do implants last?",
              "content":"Breast implants are not lifetime devices, but they can last 10-20 years or longer. Regular check-ups help monitor implant integrity and overall breast health."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Schedule Today"
          title="Ready to Begin Your Journey?"
          description="Schedule your personalized consultation with our board-certified plastic surgeons. We'll discuss your goals and create a treatment plan tailored specifically for you."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email"
          buttonText="Book Consultation"
          termsText="By scheduling a consultation, you're taking the first step toward achieving your aesthetic goals. All consultations are confidential."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394977522-kio3s97b.jpg"
          imageAlt="Professional medical consultation office"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Elite Cosmetic Surgery"
          columns={[
            {
              "items":[
                {"label":"About Us","href":"about"},
                {"label":"Our Surgeons","href":"about"},
                {"label":"Safety Standards","href":"about"}
              ]
            },
            {
              "items":[
                {"label":"Breast Augmentation","href":"feature"},
                {"label":"Breast Lift","href":"feature"},
                {"label":"Breast Reduction","href":"feature"}
              ]
            },
            {
              "items":[
                {"label":"Patient Reviews","href":"testimonial"},
                {"label":"Before & After","href":"testimonial"},
                {"label":"Success Stories","href":"testimonial"}
              ]
            },
            {
              "items":[
                {"label":"Schedule Consultation","href":"contact"},
                {"label":"Contact Info","href":"contact"},
                {"label":"Office Hours","href":"contact"}
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}