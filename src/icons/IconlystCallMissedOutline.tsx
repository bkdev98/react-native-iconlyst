import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallMissedOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M7.065 2.085c.337.194.656.456 1.06.852l.178.179 1.506 1.562c.78.85.995 1.67.796 2.609l-.046.19-.037.134-.041.135-.202.59c-.43 1.325-.25 2.073 1.283 3.606s2.28 1.713 3.604 1.28l.162-.054.254-.088.308-.1.135-.038c1.02-.272 1.891-.083 2.8.749l.17.163 1.214 1.173.358.351c.396.404.657.724.85 1.062.74 1.293.288 2.507-1.528 4.367l-.2.202-.189.191c-.296.286-.573.49-.98.683-.681.324-1.487.446-2.423.316-2.308-.32-5.235-2.142-8.943-5.849q-.302-.302-.587-.596l-.28-.292-.537-.573C.808 9.52.293 6.186 2.23 4.074l.106-.112.134-.133.073-.075C4.47 1.826 5.726 1.315 7.065 2.085M4.594 3.893l-.158.133-.29.259-.077.071-.078.074-.333.324-.03.037-.225.227c-.544.556-.802 1.234-.58 2.401.365 1.915 2.034 4.513 5.392 7.87 3.499 3.498 6.164 5.157 8.088 5.424 1.047.146 1.615-.081 2.16-.598L18.58 20l.445-.449q.234-.245.419-.458l.118-.139.205-.258c.525-.7.573-1.119.349-1.511a2.7 2.7 0 0 0-.289-.397l-.102-.116-.245-.26-.145-.145-1.531-1.478c-.47-.433-.802-.525-1.264-.428l-.129.03-.153.045-.634.215c-1.84.594-3.168.306-5.123-1.648-1.955-1.955-2.243-3.282-1.65-5.123l.067-.2.043-.124.12-.363.06-.231c.104-.503-.015-.854-.556-1.394l-.035-.036-.04-.04-1.421-1.47c-.326-.32-.563-.516-.771-.636-.435-.25-.902-.166-1.724.507m11.167-.746.084.073 2.47 2.469 2.47-2.47a.75.75 0 0 1 1.133.977l-.073.084-2.47 2.47 2.47 2.47a.75.75 0 0 1-.976 1.133l-.084-.073-2.47-2.47-2.47 2.47a.75.75 0 0 1-1.133-.976l.073-.084 2.47-2.47-2.47-2.47a.75.75 0 0 1 .976-1.133"
    />
  </Svg>
);
export default IconlystCallMissedOutline;