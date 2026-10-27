            home_button = document.getElementById("home_button");
            new_table_button = document.getElementById("new_table_button");
            table_delete_button = document.getElementById("delete_table_button");

            home_sec = document.getElementsByClassName("Home_section");
            nt_sec = document.getElementsByClassName("New_Table_section");
            dt_sec = document.getElementsByClassName("Delete_Table_section");

            home_section = document.querySelector(".Home_section");
            window.onload = function(){
                const home_button = document.getElementById("home_button");
                
                home_button.focus();
                home_sec[0].classList.remove("hide");
                nt_sec[0].classList.add("hide");
                dt_sec[0].classList.add("hide");
            }

            function hideSec1(){
                home_sec[0].classList.remove("hide");
                nt_sec[0].classList.add("hide");
                dt_sec[0].classList.add("hide");
            }

            function hideSec2(){
                home_sec[0].classList.add("hide");
                nt_sec[0].classList.remove("hide");
                dt_sec[0].classList.add("hide");
            }

            function hideSec3(){
                home_sec[0].classList.add("hide");
                nt_sec[0].classList.add("hide");
                dt_sec[0].classList.remove("hide");
            };

            function addParticipant(){
                participant_list = document.getElementById("part_list_input")
                nwprti = document.createElement("div");
                nwprti.Id = "partici";
                nwprti.className = "partici";
                
                Zinput = document.createElement("input");
                Zinput.type = "text";
                Zinput.className = "nt-inputs";
                Zinput.Id = "participant_name";

                Delbttn = document.createElement("button");
                Delbttn.type = "button";
                Delbttn.innerHTML = "-";
                Delbttn.Id = "remove_participant_button";
                Delbttn.className = "remove_bttn";
                Delbttn.onclick = function(){ removeParticipant(this); };

                participant_list.appendChild(nwprti);
                nwprti.appendChild(Zinput);
                nwprti.appendChild(Delbttn);
            }

            function removeParticipant(button){
                const textbox = button.previousElementSibling;
                if (textbox && textbox.tagName === "INPUT"){
                    textbox.remove();
                    button.remove()
                }
            }

            //Stores all the Info the User has Given
            function store_info(){
                
                const participants = Array.from(document.querySelectorAll('#part_list_input input'))
                .map(input => input.value.trim())
                .filter(name => name !== "")
                
                const full_info = {
                    Table_name : document.getElementById("table_name").value,
                    given_days : document.getElementById("duration_input").value,
                    start_date : document.getElementById("start_date").value,
                    randoms_per_day : document.getElementById("randoms_per_day").value,
                    participants : participants
                }
                alert(JSON.stringify(full_info, null, 2))

                //calculates the dates
                const [year, month, day] = full_info.start_date.split("-").map(Number);
                const startDate = new Date(year, month - 1, day);

                const Dates = []

                for(let d = 0; d <= Number(full_info.given_days) - 1; d++){
                    const d_new_date = new Date(startDate)
                    d_new_date.setDate(startDate.getDate() + d)
                    Dates.push(d_new_date)
                }
                console.log(Dates)

                //randomises the participants
                const random_array = []
                const parti_no = full_info.participants.length + 1
                const pick_chance = 1 / parti_no
                const decider = Math.random()

                for(let d = 0; d == Number(full_info.given_days); d++){
//                    for(parti_no; parti_no < 0; parti_no - 1){
//                        const highest_ch = parti_no * pick_chance
//                        const lowest_ch = (parti_no - 1) * pick_chance
//
//                        if(highest_ch >= decider > lowest_ch == true){
//                            const lucky = full_info.participants[parti_no - 1]
//                            random_array.push(lucky)
//                            console.log(random_array)
//                      }
                    for(let x in participants){


                        const lowest_ch = x * pick_chance
                        const highest_ch = (x + 1) * pick_chance

                        if(highest_ch >= x > lowest_ch){
                            random_array.push(participants[x])
                        }
                    }
                }
                console.log(random_array)
            }