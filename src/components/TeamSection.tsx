import { flags, team } from "@/data/siteData";
import FadeUp from "@/components/FadeUp";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

// Seção oculta até que flags.showTeam = true e haja membros reais em siteData.ts
const TeamSection = () => {
  if (!flags.showTeam || team.length === 0) return null;

  return (
    <section id="equipe" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeUp className="text-center mb-16">
          <h2
            className="font-bold text-foreground mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Nossa <span className="text-primary">equipe</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <FadeUp key={member.name} delay={0.08 * index}>
              <div className="text-center bg-card border border-border rounded-2xl p-8">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-primary/15 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary font-bold text-2xl">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
                <h3 className="font-bold text-foreground font-display">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
