import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoBadgeOutline = ({
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
      d="M12.084 21.39a2.2 2.2 0 0 1-1.575-.655l-1.422-1.42a1.4 1.4 0 0 0-.995-.413H7.024a4.7 4.7 0 0 1-4.69-4.689V7.3a4.7 4.7 0 0 1 4.69-4.69h10.121a4.7 4.7 0 0 1 4.689 4.69v6.915a4.7 4.7 0 0 1-4.689 4.69h-1.068a1.4 1.4 0 0 0-1 .411l-1.422 1.421a2.2 2.2 0 0 1-1.571.653M7.024 4.107a3.194 3.194 0 0 0-3.19 3.19v6.915a3.193 3.193 0 0 0 3.19 3.19h1.068a2.89 2.89 0 0 1 2.056.851l1.421 1.421a.744.744 0 0 0 1.029 0l1.423-1.42a2.89 2.89 0 0 1 2.056-.853h1.068a3.194 3.194 0 0 0 3.189-3.189V7.3a3.193 3.193 0 0 0-3.189-3.19z"
    />
    <Path
      fill={props.color}
      d="M11.18 14.443a1.9 1.9 0 0 1-.975-.262 1.96 1.96 0 0 1-.925-1.491 18.2 18.2 0 0 1 0-3.9 1.97 1.97 0 0 1 .956-1.5 2.06 2.06 0 0 1 1.842-.072 10 10 0 0 1 3 1.884 2.13 2.13 0 0 1 0 3.275h-.005a10.2 10.2 0 0 1-3 1.885 2.4 2.4 0 0 1-.893.18m.024-5.906a.45.45 0 0 0-.222.054.5.5 0 0 0-.214.385 16.7 16.7 0 0 0 0 3.544.52.52 0 0 0 .2.37.64.64 0 0 0 .54-.018 8.7 8.7 0 0 0 2.551-1.6.77.77 0 0 0 .28-.534.75.75 0 0 0-.279-.525 8.6 8.6 0 0 0-2.562-1.608.8.8 0 0 0-.294-.068"
    />
  </Svg>
);
export default IconlystVideoBadgeOutline;
