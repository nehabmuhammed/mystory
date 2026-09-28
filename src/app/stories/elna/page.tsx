import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import StoryReader from '@/components/story/StoryReader';
import StoryScene from '@/components/story/StoryScene';
import StoryText from '@/components/story/StoryText';
import Dialogue from '@/components/story/Dialogue';
import VoiceOver from '@/components/story/VoiceOver';

export default function ElnaStoryPage() {
  return (
    <StoryReader storyTitle="എൽന · ELNA">
      <StoryScene backgroundImage="/stories/scene-1-ground.jpg">

        {/* PHASE 1: Setup */}

        <StoryText>
          ഇന്റർസ്കൂൾ ടൂർണമെന്റിന്റെ ഫൈനൽ കഴിഞ്ഞിരിക്കുന്നു.
        </StoryText>

        <StoryText>
          ഗ്രൗണ്ടിന്റെ ഗാലറിയിലെ പടികളിൽ ജോയലും എൽനയും ഇരിക്കുകയാണ്.
        </StoryText>

        <StoryText>
          ബാക്കിയുള്ള കുട്ടികൾ പതിയെ ഗ്രൗണ്ട് വിട്ടുപോകുന്നു.
        </StoryText>

        <StoryText>
          അസ്തമയ സൂര്യന്റെ വെളിച്ചം ഗ്രൗണ്ടിലാകെ പരന്നുകിടക്കുന്നു.
        </StoryText>

        {/* PHASE 3: VO */}
        <VoiceOver>
          "ആ ദിവസം ഞങ്ങൾ തോറ്റു... പക്ഷേ ആ തോൽവിയേക്കാൾ കൂടുതൽ ഓർമ്മയിൽ നിന്നത്, എൽന എന്നോട് പറഞ്ഞ കുറച്ച് വാക്കുകളാണ്."
        </VoiceOver>

        {/* PHASE 4: Joel's excited rant */}
        <StoryText>
          ജോയൽ ഇപ്പോഴും കളിയുടെ ആവേശത്തിൽ സംസാരിച്ചുകൊണ്ടിരിക്കുന്നു.
        </StoryText>

        <Dialogue speaker="ജോയൽ">
          "അങ്ങനെ കളി കഴിഞ്ഞു... നമ്മൾ തോറ്റു."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "അഖിൽ ആ ലാസ്റ്റ് ബോൾ ഒന്ന് പാസ് തന്നിരുന്നെങ്കിൽ ഗോൾ ആയേനെ."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "ഇങ്ങനെയാണോ ഒരു ടീം ഡിഫൻഡ് ചെയ്യേണ്ടത്..."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "ഇങ്ങനെയൊക്കെ കളിച്ചാൽ പിന്നെ എങ്ങനെയാ ജയിക്കാ..."
        </Dialogue>

        <StoryText>
          അവൻ ഓരോരുത്തരുടെയും തെറ്റുകൾ പറഞ്ഞുകൊണ്ടിരിക്കുന്നു.
        </StoryText>

        {/* PHASE 5: Elna listening */}
        <StoryText>
          എൽന ഒന്നും പറയാതെ കേട്ടിരിക്കുന്നു.
        </StoryText>

        <StoryText>
          കുറച്ച് നേരം കഴിഞ്ഞ് അവൾ ജോയലിനെ നോക്കുന്നു.
        </StoryText>

        {/* PHASE 6 & 7: Conversation */}
        <Dialogue speaker="എൽന">
          "ജോയൽ..."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "എന്താ...?"
        </Dialogue>

        <Dialogue speaker="എൽന">
          "ബാക്കി എല്ലാവരെയും പറഞ്ഞല്ലോ..."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "നീ കളിച്ചോ... നന്നായി?"
        </Dialogue>

        <StoryText>
          എൽന ജോയലിനെ ചിരിച്ചുകൊണ്ട് നോക്കുന്നു.
        </StoryText>

        <StoryText>
          ആ ചോദ്യം അവന് അത്ര ഇഷ്ടപ്പെട്ടില്ല.
        </StoryText>

        <Dialogue speaker="ജോയൽ">
          "അതെന്താ അങ്ങനെ ചോദിച്ചേ?"
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "ഞാൻ കുഴപ്പമില്ലാതെ കളിച്ചു."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "ഈ പഴയ ബൂട്ട് കാരണമാണ് ഇടയ്ക്ക് രണ്ട് മൂന്ന് പാസ് മിസ് ആയത്."
        </Dialogue>

        <StoryText>
          എൽന അതേ ചിരിയോടെ മറുപടി പറയുന്നു.
        </StoryText>

        <Dialogue speaker="എൽന">
          "ഫുട്ബോൾ ഒരു ടീം ഗെയിം അല്ലേ..."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "ടീം തോറ്റാൽ എല്ലാവരും ഒരേ പോലെ ഉത്തരവാദികളല്ലേ..."
        </Dialogue>

        {/* PHASE 8: Joel's realization */}
        <StoryText>
          ജോയൽ ഒന്നും പറയുന്നില്ല.
        </StoryText>

        <StoryText>
          അവന് ദേഷ്യം വന്നെങ്കിലും...
        </StoryText>

        <StoryText>
          അവൾ പറഞ്ഞത് ശരിയായിരുന്നു.
        </StoryText>

        {/* PHASE 9 & 10: Final VO */}
        <VoiceOver>
          "അന്ന് എനിക്ക് അവളിൽ നിന്ന് പ്രതീക്ഷിച്ചത് ഇതായിരുന്നില്ല..."
        </VoiceOver>

        <VoiceOver>
          "‘സാരമില്ല... അടുത്ത കളി നോക്കാം...’ എന്നായിരുന്നു എനിക്ക് കേൾക്കാൻ തോന്നിയത്."
        </VoiceOver>

        <VoiceOver>
          "പക്ഷേ... ചില സമയങ്ങളിൽ ആശ്വാസം പറയുന്നതിനെക്കാൾ വലിയ സ്നേഹം..."
        </VoiceOver>

        <VoiceOver>
          "നമ്മളെ യാഥാർത്ഥ്യം മനസ്സിലാക്കാനും... തോൽവി അംഗീകരിക്കാനും പഠിപ്പിക്കുന്നതായിരിക്കും."
        </VoiceOver>

      </StoryScene>

      {/* SCENE 2: Walking home along the canal */}
      <StoryScene backgroundImage="/stories/scene-2-canal.jpg">

        <StoryText>
          ഗ്രൗണ്ടിൽ നിന്ന് ഇറങ്ങി ഞങ്ങൾ വീട്ടിലേക്കുള്ള നടത്തം തുടങ്ങി.
        </StoryText>

        <StoryText>
          കനാലിനോട് ചേർന്ന ആ ഇടുങ്ങിയ റോഡ്...
        </StoryText>

        <StoryText>
          ഒരു വശത്ത് വെള്ളം ശാന്തമായി ഒഴുകുന്നു.
        </StoryText>

        <StoryText>
          മറുവശത്ത് വീടുകളും മതിലുകളും.
        </StoryText>

        <StoryText>
          വഴിയിലൂടെ രണ്ടുപേരും പതിയെ നടക്കുന്നു.
        </StoryText>

        <VoiceOver>
          "വീട്ടിലേക്ക് നടക്കുമ്പോൾ... എന്റെ മനസ്സിൽ മുഴുവൻ എൽനയായിരുന്നു."
        </VoiceOver>

        <VoiceOver>
          "രണ്ടാം ക്ലാസ്സിലായിരുന്നു എൽന ഞങ്ങളുടെ സ്കൂളിലേക്ക് വന്നത്."
        </VoiceOver>

        <VoiceOver>
          "വീടുകൾ അടുത്തായതുകൊണ്ട് സ്കൂളിലേക്കും തിരിച്ചും എന്നും ഒരുമിച്ചായിരുന്നു."
        </VoiceOver>

        <VoiceOver>
          "ഒരുപാട് പുസ്തകങ്ങൾ വായിക്കുന്നതുകൊണ്ടാവാം... പ്രായത്തേക്കാൾ കൂടുതൽ അറിവും പക്വതയും അവൾക്കുണ്ടായിരുന്നു."
        </VoiceOver>

        <VoiceOver>
          "എല്ലാ ക്ലാസ്സിലും ഫസ്റ്റ്."
        </VoiceOver>

        <VoiceOver>
          "അധികം പഠിക്കുന്നതുകൊണ്ടും... സ്വന്തം കാര്യങ്ങൾ മാത്രം നോക്കുന്ന സ്വഭാവം കൊണ്ടാവാം... എൽനയ്ക്ക് കൂട്ടുകാർ കുറവായിരുന്നു."
        </VoiceOver>

        <VoiceOver>
          "പക്ഷേ... ദിവസവും ഒരുമിച്ച് നടന്നിരുന്ന ആ വഴിയിൽ ഞങ്ങൾ ഒരുപാട് സംസാരിക്കുമായിരുന്നു."
        </VoiceOver>

        <VoiceOver>
          "എനിക്ക് ശീലമായതുകൊണ്ടാണോ എന്നറിയില്ല... അവൾ പറയുന്നതെല്ലാം ഞാൻ കേൾക്കും."
        </VoiceOver>

        <VoiceOver>
          "ഒരു ഫുട്ബോൾ കളിക്കാരനാകണമെന്ന എന്റെ ആഗ്രഹത്തിന്... എന്നെക്കാൾ കൂടുതൽ പിന്തുണച്ചിരുന്നത് എൽനയായിരുന്നു."
        </VoiceOver>

        <VoiceOver>
          "എനിക്ക് എന്ത് കഴിക്കണം... എങ്ങനെ ട്രെയിൻ ചെയ്യണം... എന്തൊക്കെ ശ്രദ്ധിക്കണം... അങ്ങനെ ഓരോ ചെറിയ കാര്യവും അന്വേഷിച്ച് പറഞ്ഞുതരുന്നത് അവളായിരുന്നു."
        </VoiceOver>

      </StoryScene>

      {/* SCENE 3: Rainy classroom day — the beach invitation */}
      <StoryScene backgroundImage="/stories/scene-3-rain.jpg">

        <StoryText>
          പുറത്ത് നല്ല മഴ.
        </StoryText>

        <VoiceOver>
          "അടുത്ത ദിവസം..."
        </VoiceOver>

        <VoiceOver>
          "മാത്സ് പീരിയഡ്."
        </VoiceOver>

        <VoiceOver>
          "പുറത്ത് നല്ല മഴ."
        </VoiceOver>

        <VoiceOver>
          "ടീച്ചർ പഠിപ്പിക്കുന്നുണ്ടായിരുന്നു..."
        </VoiceOver>

        <VoiceOver>
          "പക്ഷേ ആ മഴയുടെ ശബ്ദത്തിനിടയിൽ... ടീച്ചർ പഠിപ്പിക്കുന്നതിനെക്കാൾ പുറത്തെ മഴയിലായിരുന്നു എല്ലാവരുടെയും ശ്രദ്ധ."
        </VoiceOver>

        <StoryText>
          ജോയൽ പതിയെ ജനാലയിലൂടെ പുറത്തേക്ക് നോക്കുന്നു.
        </StoryText>

        <StoryText>
          സ്കൂൾ മുറ്റത്ത് മഴവെള്ളം കെട്ടിക്കിടക്കുന്നു.
        </StoryText>

        <VoiceOver>
          "എന്തുകൊണ്ടാണെന്നറിയില്ല..."
        </VoiceOver>

        <VoiceOver>
          "ഉച്ചനേരത്തെ മഴയും..."
        </VoiceOver>

        <VoiceOver>
          "സ്കൂൾ വിടാൻ പോകുന്ന അവസാന മണിക്കൂറുകളും..."
        </VoiceOver>

        <VoiceOver>
          "എനിക്ക് എന്നും ഒരു പ്രത്യേക അനുഭവമായിരുന്നു."
        </VoiceOver>

        <VoiceOver>
          "ആ മഴയുടെ ശബ്ദത്തിനിടയിലും..."
        </VoiceOver>

        <VoiceOver>
          "എന്റെ മനസ്സ് മാത്രം വിചിത്രമായൊരു നിശ്ശബ്ദതയിലായിരുന്നു."
        </VoiceOver>

        <StoryText>
          ബെൽ അടിക്കുന്നു.
        </StoryText>

        <StoryText>
          അവസാന ഇടവേള.
        </StoryText>

        <StoryText>
          കുട്ടികൾ ഓരോരുത്തരായി എഴുന്നേറ്റ് പുറത്തേക്ക് പോകുന്നു.
        </StoryText>

        <StoryText>
          എൽന ജോയലിന്റെ ബെഞ്ചിനരികിലേക്ക് വരുന്നു.
        </StoryText>

        <Dialogue speaker="എൽന">
          "ജോയൽ..."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "എന്താ?"
        </Dialogue>

        <Dialogue speaker="എൽന">
          "ഈ ശനിയാഴ്ച ഫ്രീ ആണോ?"
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "ആ... എന്തേ?"
        </Dialogue>

        <StoryText>
          എൽന ചെറിയൊരു മടിയോടെ ചോദിക്കുന്നു.
        </StoryText>

        <Dialogue speaker="എൽന">
          "നമ്മൾ... ബീച്ചിൽ പോകാലോ?"
        </Dialogue>

        <StoryText>
          ഒരു നിമിഷം...
        </StoryText>

        <StoryText>
          ജോയൽ അവളെ തന്നെ നോക്കിനിൽക്കുന്നു.
        </StoryText>

        <VoiceOver>
          "ബീച്ച് കാണണമെന്ന ആഗ്രഹം ആർക്കും തോന്നും."
        </VoiceOver>

        <VoiceOver>
          "പക്ഷേ... എൽന അത് എന്നോട് പറഞ്ഞപ്പോൾ എനിക്ക് തോന്നിയത് മറ്റൊന്നായിരുന്നു."
        </VoiceOver>

        <VoiceOver>
          "ചെറുപ്പം മുതൽ അവൾ ആരോടും ഒന്നും ആവശ്യപ്പെടുന്നത് ഞാൻ കണ്ടിട്ടില്ല."
        </VoiceOver>

        <VoiceOver>
          "സ്വന്തം വീട്ടുകാരോട് പോലും."
        </VoiceOver>

        <VoiceOver>
          "ആഗ്രഹങ്ങൾ ഉണ്ടായിരുന്നെങ്കിലും..."
        </VoiceOver>

        <VoiceOver>
          "'വലുതാകുമ്പോൾ സ്വന്തമായി നേടും' എന്നായിരുന്നു എപ്പോഴും അവളുടെ മറുപടി."
        </VoiceOver>

        <VoiceOver>
          "അവളുടെ വായിൽ നിന്ന് ആദ്യമായിട്ടായിരുന്നു..."
        </VoiceOver>

        <VoiceOver>
          "'നമ്മൾ പോകാം' എന്നൊരു ആഗ്രഹം ഞാൻ കേൾക്കുന്നത്."
        </VoiceOver>

        <StoryText>
          ജോയൽ പുഞ്ചിരിക്കുന്നു.
        </StoryText>

        <Dialogue speaker="ജോയൽ">
          "അപ്പനോട് പറഞ്ഞാൽ കൊണ്ടുപോകില്ലേ?"
        </Dialogue>

        <Dialogue speaker="എൽന">
          "കൊണ്ടുപോകുമായിരിക്കും..."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "അവരുടെ കൂടെ പോയാൽ..."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "അവരുടെ ഇഷ്ടത്തിനല്ലേ പോവൂ."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "നമ്മൾ മാത്രം പോയാൽ..."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "നമ്മൾക്ക് ഇഷ്ടമുള്ള പോലെ ഇരിക്കാം."
        </Dialogue>

        <StoryText>
          ജോയൽ മിണ്ടാതെ അവളെ നോക്കുന്നു.
        </StoryText>

        <Dialogue speaker="ജോയൽ">
          "അതെന്താ... എങ്ങനെയായാലും ബീച്ച് അതേ ബീച്ച് അല്ലേ?"
        </Dialogue>

        <StoryText>
          എൽന ജനാലക്ക് പുറത്തേക്ക് നോക്കിക്കൊണ്ട് പതുക്കെ പറയുന്നു.
        </StoryText>

        <Dialogue speaker="എൽന">
          "സ്ഥലം ഒരുപോലെയായിരിക്കും..."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "പക്ഷേ..."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "നമ്മൾക്ക് ഇഷ്ടമുള്ളത് ചെയ്യാൻ കഴിയുന്ന സ്വാതന്ത്ര്യമാണ് ഓരോ യാത്രയെയും വ്യത്യസ്തമാക്കുന്നത്."
        </Dialogue>

        <StoryText>
          ജോയൽ അവളെ നോക്കുന്നു.
        </StoryText>

        <VoiceOver>
          "എൽനയോട് ഇത്രയും വർഷം സംസാരിച്ചിട്ടും..."
        </VoiceOver>

        <VoiceOver>
          "അവൾ പറഞ്ഞ ചില കാര്യങ്ങളുടെ ആഴം എനിക്ക് അന്ന് മനസ്സിലായിരുന്നില്ല."
        </VoiceOver>

        <VoiceOver>
          "അല്ലെങ്കിൽ..."
        </VoiceOver>

        <VoiceOver>
          "എനിക്ക് അപ്പോഴൊക്കെ അതൊന്നും ചിന്തിക്കാനുള്ള പ്രായമായിരുന്നില്ല."
        </VoiceOver>

        <StoryText>
          ചെറിയ നിശ്ശബ്ദത.
        </StoryText>

        <Dialogue speaker="ജോയൽ">
          "എന്നാ പോകാം."
        </Dialogue>

        <StoryText>
          ഒരു നിമിഷം കഴിഞ്ഞ്...
        </StoryText>

        <Dialogue speaker="ജോയൽ">
          "നിന്റെ സേവിംഗ്സ് എടുക്കാമല്ലോ."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "ഒരു ബിരിയാണിയൊക്കെ കഴിച്ച് തിരിച്ചു വരാം."
        </Dialogue>

        <StoryText>
          എൽന പെട്ടെന്ന് തലകുലുക്കുന്നു.
        </StoryText>

        <Dialogue speaker="എൽന">
          "ഇല്ല."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "എന്താ?"
        </Dialogue>

        <Dialogue speaker="എൽന">
          "ആ പൈസ... വേറെ ഒരു ആവശ്യത്തിനാണ്."
        </Dialogue>

        <VoiceOver>
          "സ്കോളർഷിപ്പും..."
        </VoiceOver>

        <VoiceOver>
          "പ്രൈസ് മണിയും..."
        </VoiceOver>

        <VoiceOver>
          "കുറച്ച് കുറച്ചായി കിട്ടുന്ന ഓരോ രൂപയും..."
        </VoiceOver>

        <VoiceOver>
          "ചെറുപ്പം മുതൽ എൽന സൂക്ഷിച്ചു വക്കുമായിരുന്നു."
        </VoiceOver>

        <VoiceOver>
          "സാമ്പത്തികമായി ബുദ്ധിമുട്ടുള്ള വീട്ടിൽ നിന്നിട്ടും..."
        </VoiceOver>

        <VoiceOver>
          "എന്തിനാണ് അവൾ ഇത്രയും കണക്കാക്കി ചെലവാക്കുന്നതെന്ന് എനിക്ക് മനസ്സിലായിരുന്നില്ല."
        </VoiceOver>

        <StoryText>
          ജോയലിന് ചെറിയ ദേഷ്യം വരുന്നു.
        </StoryText>

        <Dialogue speaker="ജോയൽ">
          "എന്നാ ബീച്ചിൽ പോകണ്ട."
        </Dialogue>

        <StoryText>
          എൽന കുറച്ച് നേരം മിണ്ടാതിരിക്കുന്നു.
        </StoryText>

        <StoryText>
          ശേഷം...
        </StoryText>

        <Dialogue speaker="എൽന">
          "ശരി."
        </Dialogue>

        <StoryText>
          ആ "ശരി"യിൽ നിരാശയുണ്ടായിരുന്നു.
        </StoryText>

        <StoryText>
          ബെൽ അടിക്കുന്നു.
        </StoryText>

        <StoryText>
          അവസാന പീരിയഡ് തുടങ്ങുന്നു.
        </StoryText>

        <StoryText>
          ടീച്ചർ പഠിപ്പിക്കുന്നു.
        </StoryText>

        <StoryText>
          ജോയൽ പുസ്തകം തുറന്നുവച്ചിരിക്കുന്നു.
        </StoryText>

        <StoryText>
          പക്ഷേ...
        </StoryText>

        <StoryText>
          അവന്റെ ശ്രദ്ധ മറ്റെവിടെയോ ആണ്.
        </StoryText>

        <VoiceOver>
          "ആ പീരിയഡ് മുഴുവൻ ഞാൻ അതിനെക്കുറിച്ചായിരുന്നു ആലോചിച്ചത്."
        </VoiceOver>

        <VoiceOver>
          "ഒരു കാര്യം മാത്രം എനിക്ക് ഉറപ്പായിരുന്നു..."
        </VoiceOver>

        <VoiceOver>
          "എൽനയെ വിഷമിപ്പിക്കാൻ എനിക്ക് പറ്റില്ല."
        </VoiceOver>

        <VoiceOver>
          "എന്നോടല്ലാതെ മറ്റൊരാളോടും അവൾ ഇങ്ങനെ ഒരു ആഗ്രഹം പറയില്ലെന്നും എനിക്ക് അറിയാമായിരുന്നു."
        </VoiceOver>

        <StoryText>
          സ്കൂൾ വിടുന്ന ബെൽ മുഴങ്ങുന്നു.
        </StoryText>

        <StoryText>
          കുട്ടികൾ പുറത്തേക്ക് ഓടുന്നു.
        </StoryText>

        <StoryText>
          ജോയൽ എൽനയുടെ അടുത്തേക്ക് നടക്കുന്നു.
        </StoryText>

        <Dialogue speaker="ജോയൽ">
          "എടോ..."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "ടൂർണമെന്റിൽ കിട്ടിയ അഞ്ഞൂറ് രൂപ എന്റെ കയ്യിലുണ്ട്."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "അത് മതി. നമ്മൾ പോകാം."
        </Dialogue>

        <StoryText>
          എൽന ആദ്യം ഒന്നും പറയുന്നില്ല.
        </StoryText>

        <StoryText>
          പിന്നെ...
        </StoryText>

        <StoryText>
          അവളുടെ മുഖത്ത് പതിയെ വിരിയുന്ന ആ ചിരി...
        </StoryText>

        <StoryText>
          അന്ന് കിട്ടിയ ഏത് ട്രോഫിയേക്കാളും വിലപ്പെട്ടതായിരുന്നു.
        </StoryText>

        <StoryText>
          ബസ് സ്റ്റാൻഡിൽ ആളുകൾ ഓരോരുത്തരായി ബസിനായി കാത്തുനിൽക്കുകയാണ്.
        </StoryText>

      </StoryScene>

      {/* SCENE 4: Bus stand → Beach → Rain → Goodbye */}
      <StoryScene backgroundImage="/stories/scene-4-teashop.jpg">

        <StoryText>
          ജോയൽ നേരത്തെ എത്തിയിട്ടുണ്ട്.
        </StoryText>

        <StoryText>
          കൈയിലുണ്ടായിരുന്ന അഞ്ഞൂറ് രൂപ വീണ്ടും എടുത്ത് നോക്കുന്നു.
        </StoryText>

        <VoiceOver>
          "ടൂർണമെന്റിൽ നിന്ന് കിട്ടിയ അഞ്ഞൂറ് രൂപ..."
        </VoiceOver>

        <VoiceOver>
          "കുറച്ചുകൂടി കൂട്ടിവെച്ചാൽ... ടൗണിലെ സ്പോർട്സ് ഷോപ്പിൽ വന്നിരുന്ന അഡിഡാസ് ബൂട്ടിന്റെ ഫേക്ക് കോപ്പി വാങ്ങണമെന്നായിരുന്നു എന്റെ ഏറ്റവും വലിയ ആഗ്രഹം."
        </VoiceOver>

        <VoiceOver>
          "സ്കൂളിൽ നിന്ന് വരുമ്പോഴെല്ലാം ആ ഷോപ്പിന്റെ മുന്നിൽ ഒന്ന് നിന്നുനോക്കും."
        </VoiceOver>

        <VoiceOver>
          "ഒരു ദിവസം അത് ഇട്ട് കളിക്കുന്നതും മനസ്സിൽ കാണും."
        </VoiceOver>

        <VoiceOver>
          "പക്ഷേ..."
        </VoiceOver>

        <VoiceOver>
          "ആ ദിവസം ആ പൈസ ചെലവാക്കാൻ തീരുമാനിച്ചപ്പോൾ... ചെറിയൊരു വിഷമം മനസ്സിലുണ്ടായിരുന്നു."
        </VoiceOver>

        <StoryText>
          അപ്പോഴാണ് എൽന എത്തുന്നത്.
        </StoryText>

        <StoryText>
          രണ്ടുവശത്തേക്കും മുടി പിന്നിയിട്ടാണ് അവൾ വരുന്നത്.
        </StoryText>

        <VoiceOver>
          "ഞാൻ എൽനയെ കണ്ട നാൾ മുതൽ..."
        </VoiceOver>

        <VoiceOver>
          "അവൾ ഇങ്ങനെയായിരുന്നു."
        </VoiceOver>

        <VoiceOver>
          "രണ്ടുവശത്തും മുടി പിന്നി..."
        </VoiceOver>

        <VoiceOver>
          "എപ്പോഴും ഒതുക്കത്തോടെ."
        </VoiceOver>

        <StoryText>
          ജോയൽ അവളെ നോക്കി പുഞ്ചിരിക്കുന്നു.
        </StoryText>

        <StoryText>
          പക്ഷേ പെട്ടെന്ന് എന്തോ ശ്രദ്ധിക്കുന്നു.
        </StoryText>

        <StoryText>
          അവൾ സ്കൂൾ യൂണിഫോമിലാണ്.
        </StoryText>

        <Dialogue speaker="ജോയൽ">
          "നീ യൂണിഫോം ഇട്ടാണോ വന്നത്?"
        </Dialogue>

        <Dialogue speaker="എൽന">
          "വീട്ടിൽ സ്പെഷ്യൽ ക്ലാസ് ഉണ്ടെന്ന് പറഞ്ഞിട്ടാണ് ഇറങ്ങിയത്."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "അതിന് എന്തിനാ കള്ളം പറഞ്ഞത്?"
        </Dialogue>

        <Dialogue speaker="എൽന">
          "ബീച്ചിൽ പോകാനാണെന്ന് പറഞ്ഞാൽ വിടില്ല."
        </Dialogue>

        <StoryText>
          ജോയൽ കുറച്ചുനേരം അവളെ നോക്കിനിൽക്കുന്നു.
        </StoryText>

        <VoiceOver>
          "ടൂർണമെന്റും സെലക്ഷനും ഒക്കെയാണെന്ന് പറഞ്ഞ് ഞാൻ വീട്ടിൽ നിന്ന് ഇടക്കിടെ പുറത്തുപോകാറുണ്ടായിരുന്നു."
        </VoiceOver>

        <VoiceOver>
          "അതുകൊണ്ട് വീട്ടുകാർ അധികം ചോദിക്കാറില്ല."
        </VoiceOver>

        <VoiceOver>
          "പക്ഷേ..."
        </VoiceOver>

        <VoiceOver>
          "എൽന ഇങ്ങനെ ചെയ്യുന്നത് ഞാൻ ആദ്യമായിട്ടായിരുന്നു കാണുന്നത്."
        </VoiceOver>

        <VoiceOver>
          "അതെന്നെ ശരിക്കും അത്ഭുതപ്പെടുത്തി."
        </VoiceOver>

        <StoryText>
          എൽന പതിവുപോലെ വിൻഡോ സീറ്റിൽ ഇരിക്കുന്നു.
        </StoryText>

        <StoryText>
          ജോയൽ അവളുടെ തൊട്ടടുത്ത്.
        </StoryText>

        <StoryText>
          കണ്ടക്ടർ വരുന്നു.
        </StoryText>

        <StoryText>
          ജോയൽ രണ്ട് ടിക്കറ്റ് വാങ്ങി ഒരെണ്ണം എൽനയ്ക്ക് കൊടുക്കുന്നു.
        </StoryText>

        <StoryText>
          ബസ് യാത്ര തുടരുന്നു.
        </StoryText>

        <StoryText>
          രണ്ട് സ്റ്റോപ്പുകൾ കഴിഞ്ഞപ്പോൾ തിരക്ക് കുറയുന്നു.
        </StoryText>

        <StoryText>
          ജനലിലൂടെ തണുത്ത കാറ്റ് അകത്തേക്ക് വീശുന്നു.
        </StoryText>

        <StoryText>
          മഴ പെയ്‌തൊരുങ്ങുന്ന ആകാശം.
        </StoryText>

        <StoryText>
          കുറച്ചുനേരം രണ്ടുപേരും പുറത്തേക്ക് നോക്കിയിരിക്കുന്നു.
        </StoryText>

        <Dialogue speaker="എൽന">
          "നിനക്കെങ്ങനെയാ ഇത്രയും ഫ്രണ്ട്സ്?"
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "ഫുട്ബോൾ."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "പ്രാക്ടിസിനും ടൂർണമെന്റിനും പോകുമ്പോൾ പരിചയമാകും."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "പിന്നെ പല കാര്യങ്ങളിലും ഇറങ്ങുമ്പോൾ..."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "കൂട്ടുകാർ താനേ ആയിക്കൊള്ളും."
        </Dialogue>

        <StoryText>
          എൽന തലകുലുക്കുന്നു.
        </StoryText>

        <Dialogue speaker="എൽന">
          "എനിക്കാണെങ്കിൽ..."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "അങ്ങനെ അടുത്ത് പറയാൻ പറ്റുന്ന ആളുകൾ കുറവാണ്."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "ആരോടെങ്കിലും അടുത്താൽ..."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "അവർക്കിഷ്ടമുള്ള പോലെ പെരുമാറാൻ ഞാൻ ശ്രമിക്കും."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "അത് എനിക്ക് ഇഷ്ടമല്ല."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "അതുകൊണ്ടാവും..."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "ആരോടും അധികം അടുക്കാത്തത്."
        </Dialogue>

        <StoryText>
          ജോയൽ മിണ്ടുന്നു.
        </StoryText>

        <Dialogue speaker="ജോയൽ">
          "അതൊക്കെ നിന്റെ പ്രശ്നമല്ലേ."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "ആരുടെയും ഇഷ്ടത്തിന് മാറി നിൽക്കണ്ട."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "നീ നീ ആയിട്ട് നിന്നാൽ മതി."
        </Dialogue>

        <StoryText>
          എൽന കുറച്ചുനേരം മിണ്ടാതെ പുറത്തേക്ക് നോക്കുന്നു.
        </StoryText>

        <StoryText>
          ശേഷം...
        </StoryText>

        <Dialogue speaker="എൽന">
          "അങ്ങനെ നിന്നിട്ട്..."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "ആരും എന്നെ ഇഷ്ടപ്പെട്ടില്ലെങ്കിലോ?"
        </Dialogue>

        <StoryText>
          ജോയൽ ഒട്ടും ആലോചിക്കാതെ മറുപടി പറയുന്നു.
        </StoryText>

        <Dialogue speaker="ജോയൽ">
          "എല്ലാവരും നമ്മളെ ഇഷ്ടപ്പെടണം എന്ന് വിചാരിക്കുന്നതല്ലേ ശരിക്കും പ്രശ്നം."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "ചിലർ ഇഷ്ടപ്പെടും."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "ചിലർ ഇല്ല."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "അത്രേയുള്ളൂ."
        </Dialogue>

        <StoryText>
          എൽന പുറത്തേക്ക് നോക്കി ചെറുതായി മിണ്ടുന്നു.
        </StoryText>

        <VoiceOver>
          "ആ നിമിഷം വരെ..."
        </VoiceOver>

        <VoiceOver>
          "പ്രായത്തേക്കാൾ പക്വതയുള്ള എൽനയെയായിരുന്നു ഞാൻ കണ്ടിരുന്നത്."
        </VoiceOver>

        <VoiceOver>
          "പക്ഷേ ആ യാത്രയിൽ..."
        </VoiceOver>

        <VoiceOver>
          "ആദ്യമായി ഞാൻ കണ്ടത്..."
        </VoiceOver>

        <VoiceOver>
          "ഒരുപാട് ചിന്തിക്കുന്ന..."
        </VoiceOver>

        <VoiceOver>
          "ജീവിതം പഠിച്ചുകൊണ്ടിരുന്ന ഒരു കൗമാരക്കാരി തന്നെയായിരുന്നു അവളും."
        </VoiceOver>

        <VoiceOver>
          "എനിക്ക് ചെറിയൊരു കുറ്റബോധം തോന്നി."
        </VoiceOver>

        <VoiceOver>
          "കൂട്ടുകാർ ഇല്ലാത്തതിനെക്കാൾ... ആരോടെങ്കിലും മനസ്സ് തുറന്ന് സംസാരിക്കാൻ പറ്റാത്തതായിരുന്നു എൽനയെ കൂടുതൽ അലട്ടിയിരുന്നത്."
        </VoiceOver>

        <VoiceOver>
          "എന്റെ എല്ലാ തെറ്റുകളും കണ്ടുപിടിച്ച് എന്നെ മുന്നോട്ട് പോകാൻ സഹായിച്ച എൽന..."
        </VoiceOver>

        <VoiceOver>
          "ഒരിക്കൽ പോലും അവൾക്ക് എന്ത് പ്രശ്നങ്ങളാണുള്ളത്... എന്താണ് അവൾ ശരിക്കും ആഗ്രഹിക്കുന്നത്... അതൊന്നും മനസ്സിലാക്കാൻ ഞാൻ ശ്രമിച്ചിട്ടില്ല."
        </VoiceOver>

        <VoiceOver>
          "പകരം..."
        </VoiceOver>

        <VoiceOver>
          "എല്ലാ കാര്യങ്ങളും കൃത്യമായി ചെയ്യുന്ന ആളാണവളെന്ന് ഞാൻ തെറ്റിദ്ധരിക്കുകയായിരുന്നു."
        </VoiceOver>

        <VoiceOver>
          "ആ യാത്രയ്ക്ക് ശേഷം..."
        </VoiceOver>

        <VoiceOver>
          "എൽനയെ ഞാൻ കുറച്ചുകൂടി മനസ്സിലാക്കാൻ തുടങ്ങി."
        </VoiceOver>

        <VoiceOver>
          "ഒരുപക്ഷേ..."
        </VoiceOver>

        <VoiceOver>
          "അതോടെയാകും ഞങ്ങളുടെ സൗഹൃദവും കുറച്ചുകൂടി മാറിത്തുടങ്ങിയത്."
        </VoiceOver>

        <StoryText>
          ബസ് ബീച്ച് റോഡിൽ എത്തി നിൽക്കുന്നു.
        </StoryText>

        <StoryText>
          ജോയലും എൽനയും ഇറങ്ങുന്നു.
        </StoryText>

        <StoryText>
          കടലിൽ നിന്നുള്ള തണുത്ത കാറ്റ് മുഖത്തേക്ക് അടിക്കുന്നു.
        </StoryText>

        <StoryText>
          രണ്ടുപേരും ഒന്നും പറയാതെ...
        </StoryText>

        <StoryText>
          പതിയെ ബീച്ചിലേക്ക് നടന്നു തുടങ്ങുന്നു.
        </StoryText>

        <StoryText>
          അങ്ങനെ ഞങ്ങൾ ബീച്ചിലെത്തി.
        </StoryText>

        <StoryText>
          കടൽ കണ്ടതും എൽന ഒരു നിമിഷം അവിടെ തന്നെ നിന്നു.
        </StoryText>

        <StoryText>
          പിന്നെ ഒന്നും ആലോചിക്കാതെ ചെരുപ്പഴിച്ച് നേരെ തിരമാലകളിലേക്ക് ഓടി.
        </StoryText>

        <StoryText>
          തിരമാല കാലിൽ തട്ടുമ്പോഴൊക്കെ ഒരു ചെറിയ കുട്ടിയെപ്പോലെ ചിരിക്കുകയായിരുന്നു.
        </StoryText>

        <Dialogue speaker="എൽന">
          "ജോയൽ... വാ..."
        </Dialogue>

        <StoryText>
          അവൾ എന്നെ വിളിച്ചതും ഞാനും അവളുടെ അടുത്തേക്ക് പോയി.
        </StoryText>

        <VoiceOver>
          "ആദ്യമായിട്ടായിരുന്നു..."
        </VoiceOver>

        <VoiceOver>
          "എൽനയെ ഇത്രയും സന്തോഷത്തോടെ ഞാൻ കാണുന്നത്."
        </VoiceOver>

        <StoryText>
          കുറച്ചുനേരം ഞങ്ങൾ തിരമാലകളോടൊപ്പം കളിച്ചു.
        </StoryText>

        <StoryText>
          പരസ്പരം വെള്ളം തെറിപ്പിച്ചും ഓടിയും സമയം പോയതറിഞ്ഞില്ല.
        </StoryText>

        <StoryText>
          കുറച്ചുകഴിഞ്ഞ് രണ്ടുപേരും തീരത്തിരുന്നു.
        </StoryText>

        <StoryText>
          ആരും ഒന്നും പറഞ്ഞില്ല.
        </StoryText>

        <StoryText>
          തിരമാലകളെയും മുന്നിൽ അവസാനമില്ലാതെ കിടക്കുന്ന കടലിനെയും നോക്കി അങ്ങനെ ഇരുന്നു.
        </StoryText>

        <StoryText>
          പെട്ടെന്നായിരുന്നു മഴ തുടങ്ങിയത്.
        </StoryText>

        <StoryText>
          ആദ്യം ചെറിയ മാറ്റൽ.
        </StoryText>

        <StoryText>
          പിന്നെ നന്നായി പെയ്യാൻ തുടങ്ങി.
        </StoryText>

        <StoryText>
          ബീച്ചിൽ നിന്ന് അടുത്തുള്ള ചായക്കടയിലേക്ക് കുറച്ച് ദൂരമുണ്ടായിരുന്നു.
        </StoryText>

        <StoryText>
          മണലിലൂടെ വേഗത്തിൽ ഓടാൻ പറ്റുന്നില്ല.
        </StoryText>

        <StoryText>
          എൽന എന്നേക്കാൾ പതുക്കെയായിരുന്നു ഓടിയത്.
        </StoryText>

        <StoryText>
          അവളെ വിട്ട് മുന്നോട്ട് പോകാൻ എനിക്ക് തോന്നിയില്ല.
        </StoryText>

        <StoryText>
          അതുകൊണ്ട് അവളുടെ വേഗത്തിൽ തന്നെയായിരുന്നു ഞാനും ഓടിയത്.
        </StoryText>

        <StoryText>
          അങ്ങനെ രണ്ടുപേരും നനഞ്ഞുകൊണ്ട് ചായക്കടയിലേക്ക് കയറി.
        </StoryText>

        <StoryText>
          അപ്പോഴേക്കും ഞങ്ങൾ രണ്ടുപേരും നന്നായി നനഞ്ഞിരുന്നു.
        </StoryText>

        <StoryText>
          എൽന പെട്ടെന്ന് ഷോൾ ഊരി തല തോർത്താൻ തുടങ്ങി.
        </StoryText>

        <StoryText>
          മഴയിൽ അഴിഞ്ഞ മുടി വീണ്ടും വീണ്ടും ഒതുക്കിവെക്കാൻ അവൾ ശ്രമിക്കുന്നുണ്ടായിരുന്നു.
        </StoryText>

        <StoryText>
          അപ്പോഴാണ്...
        </StoryText>

        <StoryText>
          ആദ്യമായി...
        </StoryText>

        <StoryText>
          എൽന എത്ര സുന്ദരിയാണെന്ന് ഞാൻ ശ്രദ്ധിക്കുന്നത്.
        </StoryText>

        <StoryText>
          അവൾ എന്തൊക്കെയോ പറഞ്ഞുകൊണ്ടേയിരുന്നു.
        </StoryText>

        <StoryText>
          മഴ മാറുമോയെന്നും...
        </StoryText>

        <StoryText>
          തിരിച്ചുപോകുമ്പോൾ ബസ് കിട്ടുമോ എന്നും...
        </StoryText>

        <StoryText>
          വീട്ടിൽ എത്താൻ വൈകുമോ എന്നും...
        </StoryText>

        <StoryText>
          ഓരോന്നായി സംസാരിച്ചുകൊണ്ടിരുന്നു.
        </StoryText>

        <VoiceOver>
          "ചെറുപ്പം മുതൽ ദിവസവും കണ്ടിരുന്ന ആളായിരുന്നു എൽന."
        </VoiceOver>

        <VoiceOver>
          "പക്ഷേ..."
        </VoiceOver>

        <VoiceOver>
          "ആ ദിവസം ആദ്യമായിട്ടാണ്..."
        </VoiceOver>

        <VoiceOver>
          "അവളെ ഞാൻ ശരിക്കും ശ്രദ്ധിക്കുന്നത്."
        </VoiceOver>

        <VoiceOver>
          "എന്തുകൊണ്ടോ..."
        </VoiceOver>

        <VoiceOver>
          "അന്ന് എന്റെ ശ്രദ്ധ മുഴുവൻ അവളിലായിരുന്നു."
        </VoiceOver>

        <StoryText>
          മഴ മാറാൻ കുറച്ചുകൂടി സമയമെടുത്തു.
        </StoryText>

        <StoryText>
          അതുവരെ എൽന എന്തൊക്കെയോ പറഞ്ഞുകൊണ്ടിരുന്നു.
        </StoryText>

        <StoryText>
          ഞാൻ ഒന്നും പറയാതെ...
        </StoryText>

        <StoryText>
          അവളെ നോക്കിയിരിക്കുകയായിരുന്നു.
        </StoryText>

        <StoryText>
          അങ്ങനെ ബസ് വന്നു.
        </StoryText>

        <StoryText>
          സമയം ഒരുപാടായി.
        </StoryText>

        <StoryText>
          പക്ഷേ...
        </StoryText>

        <StoryText>
          എന്തുകൊണ്ടോ ഞങ്ങൾ രണ്ടുപേർക്കും അതിന്റെ ഭാരം അപ്പോൾ തോന്നിയിരുന്നില്ല.
        </StoryText>

        <StoryText>
          ബസിൽ വലിയ തിരക്കൊന്നും ഉണ്ടായിരുന്നില്ല.
        </StoryText>

        <StoryText>
          പതിവുപോലെ എൽന വിൻഡോ സീറ്റിൽ ഇരുന്നു.
        </StoryText>

        <StoryText>
          ഞാൻ അവളുടെ തൊട്ടടുത്തും.
        </StoryText>

        <StoryText>
          മഴ കുറച്ചൊന്ന് ശമിച്ചിരുന്നു.
        </StoryText>

        <StoryText>
          എൽന ജനലിന്റെ ഷട്ടർ തുറന്നു.
        </StoryText>

        <StoryText>
          തണുത്ത കാറ്റും ഇടക്കിടെ തെറിക്കുന്ന മഴത്തുള്ളികളും അവളുടെ മുഖത്തേക്ക് വീഴുന്നുണ്ടായിരുന്നു.
        </StoryText>

        <StoryText>
          അതൊന്നും കാര്യമാക്കാതെ പുറത്തുള്ള കാഴ്ചകൾ നോക്കിയിരിക്കുകയായിരുന്നു.
        </StoryText>

        <StoryText>
          ഞാനാകട്ടെ...
        </StoryText>

        <StoryText>
          പുറത്തേക്കല്ല നോക്കിയിരുന്നത്.
        </StoryText>

        <StoryText>
          എൽനയെത്തന്നെയായിരുന്നു.
        </StoryText>

        <StoryText>
          പെട്ടെന്ന് അവൾ എന്നെ നോക്കി.
        </StoryText>

        <StoryText>
          ഞാൻ അറിയാതെ തന്നെ മുഖം തിരിച്ചു.
        </StoryText>

        <StoryText>
          എന്തിനാണ് അങ്ങനെ ചെയ്തത്...
        </StoryText>

        <StoryText>
          അന്നെനിക്ക് പോലും അറിയില്ലായിരുന്നു.
        </StoryText>

        <StoryText>
          കുറച്ചുകഴിഞ്ഞപ്പോൾ മഴ വീണ്ടും ശക്തമായി.
        </StoryText>

        <StoryText>
          ഓരോരുത്തരായി ജനലിന്റെ ഷട്ടറുകൾ അടക്കാൻ തുടങ്ങി.
        </StoryText>

        <StoryText>
          ബസിനുള്ളിൽ ചെറിയൊരു ഇരുട്ട് നിറഞ്ഞു.
        </StoryText>

        <StoryText>
          എഞ്ചിന്റെ ശബ്ദം മാത്രം.
        </StoryText>

        <StoryText>
          ഇടക്കിടെ ഓരോ സ്റ്റോപ്പിലും ബസ് നിർത്തും.
        </StoryText>

        <StoryText>
          എൽന ഷട്ടർ കുറച്ചൊന്ന് പൊക്കി പുറത്തേക്ക് നോക്കും.
        </StoryText>

        <StoryText>
          വീണ്ടും അടക്കും.
        </StoryText>

        <StoryText>
          കുറച്ചുനേരം കഴിഞ്ഞപ്പോൾ...
        </StoryText>

        <Dialogue speaker="എൽന">
          "എന്തുപറ്റി?"
        </Dialogue>

        <Dialogue speaker="എൽന">
          "ഇന്നൊക്കെ നിനക്ക് എന്തോ പോലെ."
        </Dialogue>

        <StoryText>
          ജോയൽ ചെറുതായി ചിരിച്ചു.
        </StoryText>

        <Dialogue speaker="ജോയൽ">
          "ഏയ്..."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "ഒന്നുമില്ല."
        </Dialogue>

        <StoryText>
          എൽന സംശയത്തോടെ ചിരിച്ചു.
        </StoryText>

        <StoryText>
          ആ ചിരി കണ്ടപ്പോൾ...
        </StoryText>

        <StoryText>
          എന്റെ നെഞ്ചിടിപ്പ് കൂടി.
        </StoryText>

        <StoryText>
          എന്തിനാണെന്ന് മാത്രം എനിക്ക് മനസ്സിലായില്ല.
        </StoryText>

        <StoryText>
          കുറച്ചുനേരം രണ്ടുപേരും ഒന്നും സംസാരിച്ചില്ല.
        </StoryText>

        <StoryText>
          പിന്നെ...
        </StoryText>

        <StoryText>
          എൽന പതിയെ ചോദിച്ചു.
        </StoryText>

        <Dialogue speaker="എൽന">
          "ജോയൽ..."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "നിനക്ക് ആരോടെങ്കിലും ഇഷ്ടം തോന്നിയിട്ടുണ്ടോ?"
        </Dialogue>

        <StoryText>
          ഞാൻ ഒട്ടും ആലോചിക്കാതെ മറുപടി പറഞ്ഞു.
        </StoryText>

        <Dialogue speaker="ജോയൽ">
          "ഇല്ല."
        </Dialogue>

        <StoryText>
          ഞാൻ തിരിച്ച് ചോദിച്ചു.
        </StoryText>

        <Dialogue speaker="ജോയൽ">
          "നിനക്കോ?"
        </Dialogue>

        <StoryText>
          എൽന കുറച്ചുനേരം പുറത്തേക്ക് നോക്കി.
        </StoryText>

        <StoryText>
          ശേഷം...
        </StoryText>

        <Dialogue speaker="എൽന">
          "ഉണ്ട്."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "പക്ഷേ..."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "അത് പ്രണയമാണോ എന്ന് എനിക്കറിയില്ല."
        </Dialogue>

        <StoryText>
          ഞാൻ അവളെ തന്നെ നോക്കിയിരുന്നു.
        </StoryText>

        <StoryText>
          ആരാണെന്ന് ചോദിക്കണമെന്ന് ഒരുപാട് തോന്നി.
        </StoryText>

        <StoryText>
          പക്ഷേ...
        </StoryText>

        <StoryText>
          ഒരു അക്ഷരം പോലും എന്റെ വായിൽ നിന്ന് പുറത്തുവന്നില്ല.
        </StoryText>

        <VoiceOver>
          "അന്നുവരെ..."
        </VoiceOver>

        <VoiceOver>
          "എൽനയെ കുറിച്ച് എനിക്ക് എല്ലാം അറിയാമെന്നായിരുന്നു എന്റെ വിചാരം."
        </VoiceOver>

        <VoiceOver>
          "പക്ഷേ..."
        </VoiceOver>

        <VoiceOver>
          "അവൾ പറഞ്ഞ ആ ഒറ്റ വാക്ക്..."
        </VoiceOver>

        <VoiceOver>
          "അവളെക്കുറിച്ച് എനിക്കറിയാത്ത ഒരുപാട് കാര്യങ്ങൾ ഇനിയും ഉണ്ടെന്ന് എന്നെ ഓർമ്മിപ്പിച്ചു."
        </VoiceOver>

        <StoryText>
          അങ്ങനെ ഓരോരുത്തരും ഓരോ ചിന്തകളുമായി യാത്ര തുടർന്നു.
        </StoryText>

        <StoryText>
          അതിനിടയിൽ...
        </StoryText>

        <StoryText>
          വീട് എത്തിയതറിഞ്ഞില്ല.
        </StoryText>

        <StoryText>
          അങ്ങനെ ഞങ്ങൾ വീട്ടിലേക്ക് നടന്നു.
        </StoryText>

        <StoryText>
          ഞാൻ എൽനയെ നോക്കിക്കൊണ്ടായിരുന്നു നടന്നത്.
        </StoryText>

        <StoryText>
          എന്നേക്കാൾ ഒരു സ്റ്റെപ്പ് മുന്നിലായിരുന്നു എൽന.
        </StoryText>

        <StoryText>
          പെട്ടെന്നാണ് അവൾ നടത്തം നിർത്തിയത്.
        </StoryText>

        <StoryText>
          ആരെയോ കണ്ടതുപോലെ അവൾ മുന്നിലേക്ക് നോക്കി.
        </StoryText>

        <StoryText>
          ഞാൻ അവളുടെ അടുത്തെത്തിയതും...
        </StoryText>

        <StoryText>
          പെട്ടെന്ന് ഒരു വലിയ കൈ എന്റെ കവിളിലേക്ക് വന്നു വീണു.
        </StoryText>

        <StoryText>
          ആദ്യ അടിയിൽ തന്നെ...
        </StoryText>

        <StoryText>
          അത് അപ്പന്റെ കൈയാണെന്ന് എനിക്ക് മനസ്സിലായി.
        </StoryText>

        <Dialogue speaker="അപ്പൻ">
          "എവിടെയായിരുന്നു നിങ്ങൾ?"
        </Dialogue>

        <Dialogue speaker="അപ്പൻ">
          "എവിടെയൊക്കെയോ നിന്നെ അന്വേഷിച്ചത് അറിയാമോ?"
        </Dialogue>

        <StoryText>
          അപ്പോഴാണ് എൽനയെ ഞാൻ നോക്കിയത്.
        </StoryText>

        <StoryText>
          അവളുടെ കണ്ണുകൾ നിറഞ്ഞിരുന്നു.
        </StoryText>

        <StoryText>
          ചുറ്റുമുള്ള എല്ലാവരും ഞങ്ങളെ നോക്കുന്നുണ്ടായിരുന്നു.
        </StoryText>

        <StoryText>
          ഞാൻ ആകെ അപമാനിക്കപ്പെട്ട അവസ്ഥയിലായിരുന്നു.
        </StoryText>

        <StoryText>
          ഒന്നും മിണ്ടിയില്ല.
        </StoryText>

        <StoryText>
          എൽന അവളുടെ വീട്ടിലേക്കും...
        </StoryText>

        <StoryText>
          ഞാൻ അപ്പന്റെ കൂടെ വീട്ടിലേക്കും നടന്നു.
        </StoryText>

        <StoryText>
          വീട്ടിലെത്തിയതും അപ്പന്റെ ദേഷ്യം തീർന്നിരുന്നില്ല.
        </StoryText>

        <StoryText>
          ഒരുപാട് വഴക്ക് പറഞ്ഞു.
        </StoryText>

        <StoryText>
          അടി കിട്ടിയതിനേക്കാൾ...
        </StoryText>

        <StoryText>
          അപ്പൻ ചോദിച്ച ഒരു ചോദ്യത്തിനായിരുന്നു എന്റെ കൈയിൽ മറുപടി ഇല്ലാതിരുന്നത്.
        </StoryText>

        <Dialogue speaker="അപ്പൻ">
          "അവൾക്ക് എന്തെങ്കിലും സംഭവിച്ചിരുന്നെങ്കിൽ..."
        </Dialogue>

        <Dialogue speaker="അപ്പൻ">
          "നീ എന്ത് ചെയ്തേനെ?"
        </Dialogue>

        <StoryText>
          ആ ചോദ്യത്തിന് മറുപടി പറയാൻ എനിക്ക് കഴിഞ്ഞില്ല.
        </StoryText>

        <StoryText>
          ഞാൻ മുറിയിലേക്ക് പോയി കിടന്നു.
        </StoryText>

        <StoryText>
          ഒരുപാട് കരഞ്ഞു.
        </StoryText>

        <StoryText>
          അതിലും കൂടുതൽ...
        </StoryText>

        <StoryText>
          ദേഷ്യം വന്നു.
        </StoryText>

        <StoryText>
          ഞാൻ എന്ത് തെറ്റാണ് ഇത്രയും അടി കിട്ടാൻ ചെയ്തതെന്ന് എനിക്ക് മനസ്സിലായില്ല.
        </StoryText>

        <StoryText>
          കതക് പാതി തുറന്നുകിടക്കുകയായിരുന്നു.
        </StoryText>

        <StoryText>
          ഹാളിലെ വെളിച്ചം വീഴുന്നുണ്ടായിരുന്നു.
        </StoryText>

        <StoryText>
          കുറച്ചുകഴിഞ്ഞപ്പോൾ...
        </StoryText>

        <StoryText>
          ചെറിയൊരു വീട്ടിൽ ആരൊക്കെയോ വന്ന ശബ്ദം കേട്ടു.
        </StoryText>

        <StoryText>
          സംസാരത്തിൽ നിന്ന് എനിക്ക് മനസ്സിലായി...
        </StoryText>

        <StoryText>
          വന്നത് എൽനയും അച്ഛനും അമ്മയും ആയിരുന്നു.
        </StoryText>

        <StoryText>
          പെട്ടെന്ന് മുറിയുടെ കതക് കുറച്ചുകൂടി തുറന്നു.
        </StoryText>

        <StoryText>
          ഹാളിലെ വെളിച്ചം മുറിയിലേക്ക് കുറച്ചുകൂടി വന്നു.
        </StoryText>

        <StoryText>
          ആരോ അകത്തേക്ക് നടന്നു വന്നു.
        </StoryText>

        <StoryText>
          ചെറുതായി തിരിഞ്ഞുനോക്കിയപ്പോൾ...
        </StoryText>

        <StoryText>
          എൽനയായിരുന്നു.
        </StoryText>

        <Dialogue speaker="എൽന">
          "ജോയൽ..."
        </Dialogue>

        <StoryText>
          അവൾ വിളിക്കാൻ തുടങ്ങിയതും...
        </StoryText>

        <StoryText>
          ഞാൻ അവളുടെ മുഖത്തേക്ക് പോലും നോക്കാതെ പറഞ്ഞു.
        </StoryText>

        <Dialogue speaker="ജോയൽ">
          "ഇപ്പോൾ സമാധാനമായല്ലോ."
        </Dialogue>

        <Dialogue speaker="ജോയൽ">
          "നീ പറഞ്ഞതുകൊണ്ടല്ലേ ഞാൻ വന്നത്."
        </Dialogue>

        <StoryText>
          എൽന ഒന്നും പറഞ്ഞില്ല.
        </StoryText>

        <StoryText>
          മുറിയിലേക്ക് കുറച്ചുനേരം എന്നെ നോക്കിനിന്നു.
        </StoryText>

        <StoryText>
          പിന്നെ പതിയെ തിരിഞ്ഞ് പുറത്തേക്ക് നടന്നു.
        </StoryText>

        <StoryText>
          കതക് വീണ്ടും പാതി അടഞ്ഞു.
        </StoryText>

        <StoryText>
          ആ രാത്രി...
        </StoryText>

        <StoryText>
          ഞങ്ങൾ രണ്ടുപേരും ഒന്നും പറഞ്ഞില്ല.
        </StoryText>

        <StoryText>
          രാവിലെ അമ്മ എന്റെ അടുത്തുവന്നു.
        </StoryText>

        <StoryText>
          ഇന്നലത്തെ ദേഷ്യമൊന്നും മുഖത്തില്ലായിരുന്നു.
        </StoryText>

        <Dialogue speaker="അമ്മ">
          "മോനേ..."
        </Dialogue>

        <Dialogue speaker="അമ്മ">
          "ഇങ്ങനെ ആരോടും പറയാതെ പോകാൻ പാടുണ്ടോ?"
        </Dialogue>

        <Dialogue speaker="അമ്മ">
          "നിങ്ങൾക്ക് എന്തെങ്കിലും സംഭവിച്ചിരുന്നെങ്കിൽ..."
        </Dialogue>

        <Dialogue speaker="അമ്മ">
          "എന്ത് ചെയ്തേനെ?"
        </Dialogue>

        <Dialogue speaker="അമ്മ">
          "രണ്ടുപേർക്കും നല്ല അടി കിട്ടിയല്ലോ."
        </Dialogue>

        <StoryText>
          ആ അവസാന വാക്ക് കേട്ടപ്പോഴാണ്...
        </StoryText>

        <StoryText>
          എൽനയ്ക്കും അടി കിട്ടിയ കാര്യം ഞാൻ അറിയുന്നത്.
        </StoryText>

        <VoiceOver>
          "അപ്പോഴാണ്..."
        </VoiceOver>

        <VoiceOver>
          "ഇന്നലെ ഞാൻ പറഞ്ഞത് എത്രത്തോളം തെറ്റായിരുന്നെന്ന് എനിക്ക് മനസ്സിലായത്."
        </VoiceOver>

        <VoiceOver>
          "വലിയൊരു കുറ്റബോധം തോന്നി."
        </VoiceOver>

        <StoryText>
          ഞാൻ പെട്ടെന്ന് ചോദിച്ചു.
        </StoryText>

        <Dialogue speaker="ജോയൽ">
          "എൽന എവിടെയാ?"
        </Dialogue>

        <Dialogue speaker="അമ്മ">
          "രാവിലെ തന്നെ അമ്മായിയുടെ വീട്ടിലേക്ക് പോയി."
        </Dialogue>

        <StoryText>
          ആ നിമിഷം തന്നെ...
        </StoryText>

        <StoryText>
          അവളെ ഒന്ന് കാണണമെന്ന് എനിക്ക് തോന്നി.
        </StoryText>

        <StoryText>
          ക്ഷമ ചോദിക്കണമെന്ന് തോന്നി.
        </StoryText>

        <StoryText>
          പക്ഷേ...
        </StoryText>

        <StoryText>
          അതിന് അവസരം കിട്ടിയില്ല.
        </StoryText>

        <StoryText>
          കുറച്ചുകഴിഞ്ഞപ്പോൾ...
        </StoryText>

        <StoryText>
          ഞാൻ പങ്കെടുത്തിരുന്ന കൊൽക്കത്തയിലെ ക്ലബ്ബിന്റെ സെലക്ഷനിൽ നിന്ന് ഫോൺ വന്നു.
        </StoryText>

        <StoryText>
          എനിക്ക് സെലക്ഷൻ കിട്ടിയിരുന്നു.
        </StoryText>

        <StoryText>
          പത്ത് ദിവസത്തിനുള്ളിൽ കൊൽക്കത്തയിലേക്ക് പോകണം.
        </StoryText>

        <StoryText>
          സ്കൂൾ മാറ്റാനുള്ള കാര്യങ്ങളും...
        </StoryText>

        <StoryText>
          തുടർന്നുള്ള പഠനവും ചെലവുകളും...
        </StoryText>

        <StoryText>
          അവർ നോക്കിക്കൊള്ളുമെന്നും പറഞ്ഞു.
        </StoryText>

        <StoryText>
          ആ നിമിഷം...
        </StoryText>

        <StoryText>
          ഞാൻ ഒരുപാട് നാളായി കാത്തിരുന്ന വാർത്തയായിരുന്നു അത്.
        </StoryText>

        <StoryText>
          പക്ഷേ...
        </StoryText>

        <StoryText>
          എന്തുകൊണ്ടോ സന്തോഷിക്കാൻ എനിക്ക് കഴിഞ്ഞില്ല.
        </StoryText>

        <VoiceOver>
          "ഇത്രയും നാളായി ഞാൻ കാത്തിരുന്ന അവസരമായിരുന്നു അത്."
        </VoiceOver>

        <VoiceOver>
          "പക്ഷേ..."
        </VoiceOver>

        <VoiceOver>
          "ആ വാർത്ത കേട്ട നിമിഷം..."
        </VoiceOver>

        <VoiceOver>
          "ആ സന്തോഷം ആദ്യം പങ്കുവെക്കാൻ ഞാൻ ആഗ്രഹിച്ചത് എൽനയോടായിരുന്നു."
        </VoiceOver>

        <VoiceOver>
          "പക്ഷേ..."
        </VoiceOver>

        <VoiceOver>
          "അവളെ ഒന്ന് കാണാൻ പോലും എനിക്ക് കഴിഞ്ഞില്ല."
        </VoiceOver>

        <StoryText>
          അങ്ങനെ...
        </StoryText>

        <StoryText>
          പിന്നീടുള്ള ദിവസങ്ങൾ തിരക്കിലായിരുന്നു.
        </StoryText>

        <StoryText>
          സ്കൂൾ മാറുന്നതിനുള്ള കാര്യങ്ങളും...
        </StoryText>

        <StoryText>
          കൊൽക്കത്തയിലേക്ക് പോകാനുള്ള തയ്യാറെടുപ്പുകളും...
        </StoryText>

        <StoryText>
          വേണ്ട സാധനങ്ങൾ വാങ്ങുന്നതുമൊക്കെയായി ദിവസങ്ങൾ വേഗത്തിൽ കടന്നുപോയി.
        </StoryText>

        <StoryText>
          അതിനിടയിൽ...
        </StoryText>

        <StoryText>
          എൽന തിരിച്ചു വന്നെന്നറിഞ്ഞിരുന്നു.
        </StoryText>

        <StoryText>
          പക്ഷേ...
        </StoryText>

        <StoryText>
          അവളെ ഒന്ന് കാണാനോ...
        </StoryText>

        <StoryText>
          യാത്ര പറയാനോ...
        </StoryText>

        <StoryText>
          എനിക്ക് കഴിഞ്ഞില്ല.
        </StoryText>

        <VoiceOver>
          "കൊൽക്കത്തയിലേക്ക് പോകണമെന്നായിരുന്നു വർഷങ്ങളായുള്ള എന്റെ സ്വപ്നം."
        </VoiceOver>

        <VoiceOver>
          "പക്ഷേ..."
        </VoiceOver>

        <VoiceOver>
          "ആ ദിവസങ്ങളിൽ..."
        </VoiceOver>

        <VoiceOver>
          "ആ സ്വപ്നത്തേക്കാൾ..."
        </VoiceOver>

        <VoiceOver>
          "ഒരാളോട് മാപ്പ് പറയാൻ കഴിയാത്തതായിരുന്നു എന്നെ കൂടുതൽ അലട്ടിയത്."
        </VoiceOver>

        <StoryText>
          ജോയലിന് സ്കൂളിൽ യാത്രയയപ്പ്.
        </StoryText>

        <StoryText>
          അധ്യാപകരും...
        </StoryText>

        <StoryText>
          വിദ്യാർത്ഥികളും...
        </StoryText>

        <StoryText>
          കൈ കൊടുക്കുന്നു.
        </StoryText>

        <StoryText>
          പൂച്ചെണ്ട് നൽകുന്നു.
        </StoryText>

        <StoryText>
          എല്ലാവരും ജോയലിനെ അഭിനന്ദിക്കുന്നു.
        </StoryText>

        <VoiceOver>
          "അവിടെ എല്ലാവരും എന്നെ നോക്കിയിരുന്നു."
        </VoiceOver>

        <VoiceOver>
          "പക്ഷേ..."
        </VoiceOver>

        <VoiceOver>
          "ഞാൻ തിരഞ്ഞത് ഒരാളെ മാത്രമായിരുന്നു."
        </VoiceOver>

        <StoryText>
          ജോയലിന്റെ കണ്ണുകൾ ആൾക്കൂട്ടത്തിനിടയിലൂടെ സഞ്ചരിക്കുന്നു.
        </StoryText>

        <StoryText>
          പിന്നിൽ...
        </StoryText>

        <StoryText>
          മറ്റു കുട്ടികളുടെ കൂടെ...
        </StoryText>

        <StoryText>
          നിശ്ശബ്ദമായി നിൽക്കുന്ന എൽന.
        </StoryText>

        <StoryText>
          കൈ കൊടുക്കുന്നുണ്ട്.
        </StoryText>

        <StoryText>
          ചെറുതായി ചിരിക്കുന്നു.
        </StoryText>

        <StoryText>
          അവരുടെ കണ്ണുകൾ ഒരു നിമിഷം തമ്മിൽ കൂടിമുട്ടുന്നു.
        </StoryText>

        <StoryText>
          പക്ഷേ...
        </StoryText>

        <StoryText>
          ആരും ഒന്നും പറയുന്നില്ല.
        </StoryText>

        <StoryText>
          പോകാനുള്ള സമയം.
        </StoryText>

        <StoryText>
          വീടുമുറ്റത്ത് ബന്ധുക്കളും...
        </StoryText>

        <StoryText>
          കൂട്ടുകാരും...
        </StoryText>

        <StoryText>
          അയൽക്കാരും...
        </StoryText>

        <StoryText>
          എല്ലാവരും എത്തിയിട്ടുണ്ട്.
        </StoryText>

        <StoryText>
          വീടുമുന്നിൽ കാർ.
        </StoryText>

        <StoryText>
          ഡ്രൈവർ ഡിക്കിയിൽ സാധനങ്ങൾ വക്കുകയാണ്.
        </StoryText>

        <Dialogue speaker="ഡ്രൈവർ">
          "മോനേ..."
        </Dialogue>

        <Dialogue speaker="ഡ്രൈവർ">
          "ഇനി താമസിച്ചാൽ ട്രെയിൻ മിസ്സാകും."
        </Dialogue>

        <StoryText>
          അമ്മ കണ്ണ് തുടക്കുന്നു.
        </StoryText>

        <StoryText>
          അപ്പൻ ജോയലിന്റെ തോളിൽ കൈ വക്കുന്നു.
        </StoryText>

        <StoryText>
          ഓരോരുത്തരായി വന്ന് യാത്ര പറയുന്നു.
        </StoryText>

        <StoryText>
          എല്ലാവരുടെയും മുഖത്ത് സന്തോഷമുണ്ട്.
        </StoryText>

        <StoryText>
          പക്ഷേ...
        </StoryText>

        <StoryText>
          അതിനേക്കാൾ കൂടുതൽ വിഷമവും.
        </StoryText>

        <VoiceOver>
          "എല്ലാവരും അവിടെയുണ്ടായിരുന്നു."
        </VoiceOver>

        <VoiceOver>
          "ഒരാളൊഴികെ."
        </VoiceOver>

        <StoryText>
          ജോയലിന്റെ കണ്ണുകൾ വീണ്ടും റോഡിലേക്ക് പോകുന്നു.
        </StoryText>

        <StoryText>
          ആരുമില്ല.
        </StoryText>

        <StoryText>
          ഒരു നിമിഷം...
        </StoryText>

        <StoryText>
          അവൻ തല താഴ്ത്തുന്നു.
        </StoryText>

        <StoryText>
          പോകാനായി കാറിലേക്ക് നടക്കുന്നു.
        </StoryText>

        <StoryText>
          അപ്പോഴാണ്...
        </StoryText>

        <StoryText>
          ദൂരെ നിന്ന് ഒരു സ്കൂട്ടറിന്റെ ശബ്ദം.
        </StoryText>

        <StoryText>
          ജോയൽ തിരിഞ്ഞുനോക്കുന്നു.
        </StoryText>

        <StoryText>
          എൽനയും...
        </StoryText>

        <StoryText>
          അവളുടെ അച്ഛനും.
        </StoryText>

        <StoryText>
          സ്കൂട്ടർ വീടുമുറ്റത്ത് വന്ന് നിൽക്കുന്നു.
        </StoryText>

        <StoryText>
          എൽന ഇറങ്ങുന്നു.
        </StoryText>

        <StoryText>
          അവളുടെ കൈയിൽ ചെറിയൊരു ഗിഫ്റ്റ് ബോക്സുണ്ട്.
        </StoryText>

        <StoryText>
          അവൾ പതിയെ ജോയലിന്റെ അടുത്തേക്ക് നടക്കുന്നു.
        </StoryText>

        <StoryText>
          ചുറ്റുമുള്ള ശബ്ദങ്ങളെല്ലാം മങ്ങിപ്പോകുന്നു.
        </StoryText>

        <StoryText>
          കുറച്ചുനേരം...
        </StoryText>

        <StoryText>
          രണ്ടുപേരും ഒന്നും സംസാരിക്കുന്നില്ല.
        </StoryText>

        <StoryText>
          ശേഷം...
        </StoryText>

        <StoryText>
          എൽന ചെറുതായി ചിരിക്കാൻ ശ്രമിക്കുന്നു.
        </StoryText>

        <Dialogue speaker="എൽന">
          "ഇനി..."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "എന്നാ കാണുക...?"
        </Dialogue>

        <StoryText>
          ആ ചിരിക്ക് പിന്നിൽ...
        </StoryText>

        <StoryText>
          കണ്ണുകൾ നിറഞ്ഞിരുന്നു.
        </StoryText>

        <StoryText>
          ജോയൽ എന്തോ പറയാൻ ശ്രമിക്കുന്നു.
        </StoryText>

        <StoryText>
          പക്ഷേ...
        </StoryText>

        <StoryText>
          ഒരു വാക്ക് പോലും പുറത്തുവരുന്നില്ല.
        </StoryText>

        <StoryText>
          എൽന കൈയിലുണ്ടായിരുന്ന ഗിഫ്റ്റ് അവന് നേരെ നീട്ടുന്നു.
        </StoryText>

        <Dialogue speaker="എൽന">
          "ഓൾ ദി ബെസ്റ്റ്."
        </Dialogue>

        <StoryText>
          ജോയൽ പതിയെ അത് വാങ്ങുന്നു.
        </StoryText>

        <StoryText>
          എൽന കണ്ണ് തുടച്ച് തിരിഞ്ഞ് നടക്കാൻ തുടങ്ങുന്നു.
        </StoryText>

        <StoryText>
          അപ്പോഴാണ്...
        </StoryText>

        <StoryText>
          എൽനയുടെ അമ്മ ചിരിച്ചുകൊണ്ട് പറയുന്നത്.
        </StoryText>

        <Dialogue speaker="എൽനയുടെ അമ്മ">
          "ഹാ..."
        </Dialogue>

        <Dialogue speaker="എൽനയുടെ അമ്മ">
          "ഇത്രയും നാളത്തെ സേവിംഗ്സ് എല്ലാം തീർന്നല്ലോ."
        </Dialogue>

        <StoryText>
          ആ വാക്ക് കേട്ടതും...
        </StoryText>

        <StoryText>
          ജോയൽ അറിയാതെ ഗിഫ്റ്റ് ബോക്സിലേക്ക് നോക്കുന്നു.
        </StoryText>

        <StoryText>
          ഒന്നും പറയാൻ കഴിയുന്നില്ല.
        </StoryText>

        <Dialogue speaker="അപ്പൻ">
          "വാ മോനേ..."
        </Dialogue>

        <StoryText>
          ജോയൽ പതിയെ കാറിൽ കയറുന്നു.
        </StoryText>

        <StoryText>
          കാർ മുന്നോട്ട് നീങ്ങിത്തുടങ്ങുന്നു.
        </StoryText>

        <StoryText>
          ജോയൽ ജനൽക്കരികിൽ ഇരുന്നു...
        </StoryText>

        <StoryText>
          പുറത്തേക്ക് നോക്കുന്നു.
        </StoryText>

        <StoryText>
          എൽന അവിടെ തന്നെ നിൽക്കുകയാണ്.
        </StoryText>

        <StoryText>
          അവൾ കൈ വീശാൻ ശ്രമിക്കുന്നു.
        </StoryText>

        <StoryText>
          പക്ഷേ...
        </StoryText>

        <StoryText>
          കൈ പകുതിയിൽ നിൽക്കുന്നു.
        </StoryText>

        <StoryText>
          കാർ കുറച്ചുകൂടി മുന്നോട്ട് പോകുന്നു.
        </StoryText>

        <StoryText>
          ജോയൽ പതിയെ ഗിഫ്റ്റ് ബോക്സ് തുറക്കുന്നു.
        </StoryText>

        <StoryText>
          അതിനുള്ളിൽ...
        </StoryText>

        <StoryText>
          അവൻ വർഷങ്ങളായി ആഗ്രഹിച്ചിരുന്ന...
        </StoryText>

        <StoryText>
          ആ അഡിഡാസ് ബൂട്ട്.
        </StoryText>

        <StoryText>
          അതേ മോഡൽ.
        </StoryText>

        <StoryText>
          അതേ നിറം.
        </StoryText>

        <StoryText>
          ഒരു നിമിഷം...
        </StoryText>

        <StoryText>
          അവന് ശ്വാസം എടുക്കാൻ പോലും കഴിഞ്ഞില്ല.
        </StoryText>

        <StoryText>
          കണ്ണുകൾ നിറഞ്ഞു.
        </StoryText>

        <StoryText>
          ബൂട്ട് നെഞ്ചോട് ചേർത്ത് പിടിച്ചു.
        </StoryText>

        <StoryText>
          അവന്റെ ഓർമ്മയിലേക്ക്...
        </StoryText>

        <StoryText>
          എൽന പറഞ്ഞ വാക്കുകൾ ഒന്നൊന്നായി വന്നു.
        </StoryText>

        <Dialogue speaker="എൽന">
          "ആ പൈസ..."
        </Dialogue>

        <Dialogue speaker="എൽന">
          "വേറെ ഒരു ആവശ്യത്തിനാണ്."
        </Dialogue>

        <StoryText>
          അപ്പോഴാണ്...
        </StoryText>

        <StoryText>
          അവന് എല്ലാം മനസ്സിലായത്.
        </StoryText>

        <VoiceOver>
          "അന്ന്..."
        </VoiceOver>

        <VoiceOver>
          "എനിക്ക് മനസ്സിലായി..."
        </VoiceOver>

        <VoiceOver>
          "പ്രണയം..."
        </VoiceOver>

        <VoiceOver>
          "ഒരാളോട് പറയുന്ന ഒരു വാക്കല്ലെന്ന്."
        </VoiceOver>

        <VoiceOver>
          "അറിയാതെ..."
        </VoiceOver>

        <VoiceOver>
          "ഒരാളുടെ സന്തോഷം..."
        </VoiceOver>

        <VoiceOver>
          "സ്വന്തം സന്തോഷമായി മാറുന്ന നിമിഷം മുതൽ..."
        </VoiceOver>

        <VoiceOver>
          "അത് തുടങ്ങിയിട്ടുണ്ടാകുമെന്ന്."
        </VoiceOver>

        <VoiceOver>
          "എൽന..."
        </VoiceOver>

        <VoiceOver>
          "എന്നേക്കാൾ മുമ്പേ..."
        </VoiceOver>

        <VoiceOver>
          "അത് മനസ്സിലാക്കിയിരുന്നു."
        </VoiceOver>

        <VoiceOver>
          "ഞാൻ മാത്രം..."
        </VoiceOver>

        <VoiceOver>
          "വൈകിപ്പോയി."
        </VoiceOver>

        <StoryText>
          ജോയൽ കണ്ണുനീർ തുടക്കുന്നു.
        </StoryText>

        <StoryText>
          കാറിന്റെ ഗ്ലാസിലൂടെ പുറത്തേക്ക് നോക്കുന്നു.
        </StoryText>

        <StoryText>
          ദൂരെ...
        </StoryText>

        <StoryText>
          എൽന ഇപ്പോഴും അവിടെ നിൽക്കുകയാണ്.
        </StoryText>

        <StoryText>
          കാർ മുന്നോട്ട് പോകുന്തോറും...
        </StoryText>

        <StoryText>
          അവളുടെ രൂപം ചെറുതായിക്കൊണ്ടിരുന്നു.
        </StoryText>

        <StoryText>
          ജോയൽ അവളെ തന്നെ നോക്കിയിരുന്നു.
        </StoryText>

        <StoryText>
          അവളെ ഇനി കാണാൻ കഴിയാത്തതുവരെ.
        </StoryText>

        {/* Story Ending Card */}
        <div className="w-full flex flex-col items-center justify-center pt-24 pb-12 text-center gap-6">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"></div>
          <span className="font-serif text-2xl md:text-3xl text-primary-text tracking-widest font-normal">
            ശുഭം
          </span>
          <p className="font-serif text-secondary-text text-sm md:text-base italic max-w-md">
            "ചില കഥകൾ അവസാനിച്ച ശേഷമാണ് ശരിക്കും തുടങ്ങുന്നത്..."
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Link
              href="/#stories"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border/80 text-secondary-text hover:text-primary-text hover:border-accent transition-all duration-300 text-xs tracking-wider"
            >
              <ArrowLeft size={16} />
              <span>മറ്റു കഥകൾ</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary-text text-background hover:bg-accent hover:text-white transition-all duration-300 text-xs tracking-wider"
            >
              <span>എഴുത്തുകാരനെക്കുറിച്ച്</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </StoryScene>
    </StoryReader>
  );
}