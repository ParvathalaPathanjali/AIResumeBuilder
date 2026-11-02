import ollama
def generate_resume(data):
    name = data["name"]
    email = data["email"]
    phone = data["phone"]
    linkedin = data["linkedin"]
    github = data["github"]
    education = data["education"]
    school = education["school"]
    schoolMarks = education["schoolMarks"]
    schoolYear = education["schoolYear"]
    inter = education["inter"]
    interMarks = education["interMarks"]
    interYear = education["interYear"]
    graduation = education["graduation"]
    graduationMarks = education["graduationMarks"]
    graduationYear = education["graduationYear"]
    skills = data["skills"]
    project = data["project"]
    internship = data["internship"]
    work = data["workExperience"]
    certificate = data["certificate"]
    achievement = data["achievement"]
    languages = data["languages"]
prompt = f"""
You are a professional Resume Writer and ATS Resume Expert.
Suggestions to improve the ATS score above 90%.
Your task is to create a modern, ATS-friendly resume with an estimated ATS compatibility score of 80% or higher.
Guidelines:
- Use a clean professional layout.
- Do not use tables, columns, icons, emojis, graphics or images.
- Keep the resume concise and ATS compatible.
-Improve grammar without changing facts.
- Use strong action verbs.
- Add measurable achievements wherever possible.
- Improve the wording professionally while keeping the user's information accurate.
- If some information is missing, do not invent facts. Simply omit that section.
- Organize the resume into these sections:
1. Professional Summary
2. Technical Skills
3. Education
4. Internship Experience (if available)
5. Projects
6. Work Experience (if available)
7. Certifications
8. Achievements
9. Languages
Candidate Information

Name:
{name}

Email:
{email}

Phone:
{phone}

LinkedIn:
{linkedin if linkedin else "Not Provided"}

GitHub:
{github if github else "Not Provided"}

Education

School:
{school}
Marks:
{schoolMarks}
Year:
{schoolYear}

Intermediate:
{inter}
Marks:
{interMarks}
Year:
{interYear}

Graduation:
{graduation}
CGPA:
{graduationMarks}
Year:
{graduationYear}

Skills:
{skills}

Internship:
{internship}

Projects:
{project}

Work Experience:
{work}

Certification:
{certificate}

Achievement:
{achievement}

Languages:
{languages}

Generate:

1. A complete ATS-friendly professional resume.
2. An estimated ATS Score out of 100.
3. Top strengths of the resume.
4. Missing keywords or improvements.
5. Suggestions to improve the ATS score above 90%.
"""

response = ollama.chat(
    model="llama3.2",
    messages=[
        {
            "role": "user",
            "content": prompt
        }
    ]
)
return response["message"]["content"]