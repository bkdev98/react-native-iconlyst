import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetLocationOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12 22.05c-1.8 0-8.28-5.57-8.28-11.22 0-4.56 3.71-8.28 8.28-8.28s8.28 3.71 8.28 8.28c0 5.65-6.48 11.22-8.28 11.22m0-18c-3.74 0-6.78 3.04-6.78 6.78 0 4.85 5.75 9.56 6.81 9.73 1-.17 6.75-4.88 6.75-9.73 0-3.74-3.04-6.78-6.78-6.78"
    />
    <Path
      fill={props.color}
      d="M12 8.24a.97.97 0 0 1-.69-1.65c.18-.18.43-.29.69-.29a.97.97 0 0 1 0 1.94M15.15 9.85a.97.97 0 0 1-.69-1.65c.18-.18.43-.29.69-.29a.97.97 0 0 1 0 1.94M8.85 9.85a.97.97 0 0 1-.69-1.65c.18-.18.43-.29.69-.29a.97.97 0 0 1 0 1.94M9.91 14.67c-.3 0-.6-.06-.88-.24-.38-.25-.62-.67-.71-1.25-.12-.75.13-1.53.69-2.19.73-.86 1.89-1.4 3.02-1.4 1.97 0 3.71 1.55 3.73 3.31 0 .65-.18 1.13-.55 1.43-.6.48-1.38.3-2.13.12-.36-.09-.74-.18-1.05-.18-.26 0-.6.09-.93.18-.38.1-.79.21-1.19.21zm2.12-3.58c-.69 0-1.42.34-1.87.87-.16.19-.42.57-.35.99.03.18.07.24.07.24.1.02.56-.11.84-.18.4-.11.86-.23 1.32-.23.48 0 .97.12 1.4.22.26.06.63.15.81.15 0 0 .02-.12.01-.23 0-.85-.98-1.83-2.23-1.83"
    />
  </Svg>
);
export default IconlystPetLocationOutline;
