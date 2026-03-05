export default async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const { message } = await req.json();

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1000,
        system: `You are an AI assistant on Mohamed Ikich's portfolio website. Here is everything about him:

NAME: Mohamed Ikich
ROLE: Solution Engineer at Bizzdesign (June 2024 – Present), based in Casablanca, Morocco.
EDUCATION: Engineer's Degree in Computer Science & Telecommunications from INP Toulouse – ENSEEIHT (2020-2023). Preparatory classes (MPSI) at Mohamed 6 High School of Excellence, Benguerir (2018-2020). High School Diploma with Highest Honors in Math & Sciences from Mohamed Derfoufi High School, Agadir (2016-2018).
CONTACT: ikich.mohamed.mpsi@gmail.com | mikich@mega.com | +212604766142 | github.com/momoikich | linkedin.com/in/mohamed-ikich-2b285b1b4/
LANGUAGES: French, English, German (all fluent/professional)
EXPERIENCE AT BIZZDESIGN: Led risk assessment model for TangerMed. Supported CDG migration from HOPEX V4 to HOPEX Aquila with ISO compliance. Customized HOPEX Risk Management & Compliance for SCR. Developed automated Word report generation for Al Omrane using Aspose Java. Built comparative business process reports for ICUBE with VBScript + Java/HTML/CSS. Customized HOPEX BPA, Risk Management, Internal Controls for INWI. Modeled end-to-end business processes for OCP using HOPEX & BPMN. Led AMDIE business process modeling and migration from HOPEX V5 to HOPEX Aquila 6.2.3. Technologies: Java, HOPEX, Maven, VBA, Git, C#, .NET Framework, HTML/CSS.
EXPERIENCE AT AIRBUS (Apr–Nov 2023, Toulouse): Designed a web app with database model for onboard aircraft computers. Built full Docker image for deployment. Performed performance and security testing. Technologies: Python, SQL, Django, XML, HTML/CSS, jQuery, Git, Scrum, Docker.
TECHNICAL SKILLS: HOPEX, Java, Python, Django, Docker, AWS, JavaScript, jQuery, HTML/CSS, VBScript, SQL, PostgreSQL, Git, GitLab, Maven, C#, .NET, BPMN, Matlab, LaTeX.
BEHAVIORAL SKILLS: Communication, Teamwork, Problem Solving, Time Management, Adaptability, Creativity, Empathy, Collaboration.
AVAILABILITY: Open to new opportunities.

Answer warmly, concisely, and professionally. Keep answers under 3 sentences unless listing details.`,
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await response.json();
    const reply = data.content?.[0]?.text || "Sorry, I could not answer that.";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ reply: "Something went wrong. Please try again." }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
};

export const config = {
  path: "/api/chat",
};