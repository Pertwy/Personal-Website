import Certification from '../Certification'

export default function Certifications() {
    return (
      <section>
        <h1 className="recent-certifications-header">Recent Certifications</h1>

        <div className="row space-between">
   
          <Certification 
            title="AWS Certified Cloud Practitioner"
            image="https://images.credly.com/size/680x680/images/68468004-5a85-4f3b-bc58-590773979486/AWS-CloudPractitioner-2020.png"
            link="https://www.credly.com/badges/85703df6-a110-422d-838c-e7b5c3b5ad35/linked_in"/>

          <Certification 
            title="MongoDB A300: Atlas Security"
            image="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-mongodb/events/mon.png"
            link="https://university.mongodb.com/course_completion/b03927d1-9235-4c01-ab34-f4aad2452096?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing"/>

          <Certification 
            title="MongoDB M001: MongoDB basics"
            image="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-mongodb/events/mon.png"
            link="https://university.mongodb.com/course_completion/4872ae8a-1f73-469c-95ce-3c350676db45?utm_source=linkedin&utm_medium=social&utm_campaign=university_social_sharing"/>
        </div>
      </section>
    )
}
