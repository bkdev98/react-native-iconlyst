import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSphereGlobDashOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.75A8.25 8.25 0 0 0 4 12a8.25 8.25 0 0 0 8.25 8.25A8.25 8.25 0 0 0 20.5 12a8.25 8.25 0 0 0-8.25-8.25M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.854 9.884a.75.75 0 0 1-.137 1.051C4.164 11.361 4 11.731 4 12a.75.75 0 0 1-1.5 0c0-.928.566-1.687 1.303-2.254a.75.75 0 0 1 1.051.138M11.29 8.408a.75.75 0 0 1-.69.805c-1.294.098-2.475.312-3.475.607A.75.75 0 0 1 6.7 8.382c1.115-.33 2.401-.56 3.785-.665a.75.75 0 0 1 .805.69M13.121 8.404a.75.75 0 0 1 .803-.694c1.382.1 2.669.323 3.787.646a.75.75 0 0 1-.416 1.441c-1.005-.29-2.187-.497-3.48-.59a.75.75 0 0 1-.694-.803M19.646 9.884a.75.75 0 0 1 1.052-.138C21.434 10.313 22 11.072 22 12a.75.75 0 0 1-1.5 0c0-.269-.163-.639-.717-1.065a.75.75 0 0 1-.137-1.051"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.25 11.25A.75.75 0 0 1 4 12c0 .224.11.514.473.856.363.344.93.688 1.691.993 1.52.608 3.672 1.001 6.086 1.001s4.566-.393 6.086-1c.762-.306 1.328-.65 1.692-.994.361-.342.472-.632.472-.856a.75.75 0 0 1 1.5 0c0 .77-.393 1.427-.942 1.946-.547.518-1.299.95-2.165 1.296-1.738.695-4.087 1.108-6.643 1.108s-4.905-.413-6.643-1.108c-.866-.347-1.618-.779-2.165-1.296C2.893 13.427 2.5 12.77 2.5 12a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSphereGlobDashOutline;
