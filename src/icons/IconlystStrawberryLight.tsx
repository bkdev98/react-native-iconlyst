import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStrawberryLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.023 19.748c1.97-1.97 3.176-4.519 3.175-7.337 0-2.066-1.729-3.808-3.807-3.808H9.609c-2.078 0-3.808 1.741-3.807 3.808 0 2.817 1.205 5.364 3.175 7.334 1.646 1.649 4.399 1.65 6.046.003"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.609 14.62.103.383M15.27 12.343l.102.383M11.949 12.343l.102.383M8.628 12.343l.103.383M10.288 14.62l.103.383M11.949 16.815l.102.382M12 3c-1.455 1.07-1.484 2.374-1.316 2.892-.225-.379-1.192-1.081-3.254-.863 0 1.283 1.06 3.574 4.57 3.574 3.402 0 4.57-2.291 4.57-3.574-2.062-.218-3.028.484-3.254.863.168-.518.14-1.821-1.316-2.892"
    />
  </Svg>
);
export default IconlystStrawberryLight;
