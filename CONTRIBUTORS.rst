.. 2>/dev/null
 names () 
 { 
 echo -e "\n exit;\n**Contributors (sorted by number of commits):**\n";
 git log --format='%aN:%aE' origin/main | grep -Ev "(anonymous:|FYG_.*_bot_ignore_me)" | sed 's/@users.github.com/@users.noreply.github.com/g' | awk 'BEGIN{FS=":"}{match ($1, /^(%)?(.*)/, n) ; ct[n[2]]+=1; if (n[1] ~ /%/ || e[n[2]] == "" ) { e[n[2]]=$2}}END{for (i in e) { n[i]=e[i];c[i]+=ct[i] }; for (a in e) print c[a]"\t* "a" <"n[a]">";}' | sort -n -r | cut -f 2-
 }
 quine () 
 { 
 { 
 echo ".. 2>/dev/null";
 declare -f names | sed -e 's/^[[:space:]]*/ /';
 declare -f quine | sed -e 's/^[[:space:]]*/ /';
 echo -e " quine\n";
 names;
 echo -e "\n*To update the contributors list just run this file with bash. Prefix a name with % in .mailmap to set a contact as preferred*"
 } > CONTRIBUTORS.rst;
 exit
 }
 quine


 exit;
**Contributors (sorted by number of commits):**

* Stefano Seppi <s.seppi@noi.bz.it>
* Henri Egger <105497721+henri-egger@users.noreply.github.com>
* emilylouisesimonis <38345889+emilylouisesimonis@users.noreply.github.com>
* Patrick Ohnewein <p.ohnewein@noi.bz.it>
* Delia Mennitti <101118017+d3liaa@users.noreply.github.com>
* ila131 <ilrusso@posteo.net>
* Patrick Bertolla <p.bertolla@noi.bz.it>
* Simon Dalvai <s.dalvai@noi.bz.it>
* Luca Miotto <l.miotto@noi.bz.it>
* Gabriele <gabrieledecandido@flashbeing.com>
* BresciaIla <bresciailaria.ib01@gmail.com>
* lukmay <lukas.mayr00@gmail.com>
* maxglio <massimo.maglio.06@gmail.com>
* Elisa <ciardulli.elisa@gmail.com>
* RudiThoeni <30471361+RudiThoeni@users.noreply.github.com>
* Matteo Biasi <matteobiasi@flashbeing.com>
* Crystal Kwok <kwokyatingcrystal@gmail.com>
* Owusua <lilowusuaoduro@gmail.com>
* Russo Ilaria (Student Com20) <ilaria.russo@stud-inf.unibz.it>
* Alex Lanz <alex@krumer.it>
* Piiit <pitiz29a@gmail.com>
* Gabbo <37242882+lelebus@users.noreply.github.com>
* DErcoli Chiara (Student Com20) <chiara.dercoli@stud-inf.unibz.it>
* Clemens Zagler <c.zagler@noi.bz.it>
* Luscha <matteo.roggia@gmail.com>
* Luca Pasquarelli <77533674+luhodaan@users.noreply.github.com>

*To update the contributors list just run this file with bash. Prefix a name with % in .mailmap to set a contact as preferred*
