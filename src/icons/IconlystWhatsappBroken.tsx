import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhatsappBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.465 3.161c3.578.671 6.453 3.548 7.124 7.124C22.657 15.98 18.262 21 12.749 21c-1.409 0-2.818-.34-4.05-.963a1.02 1.02 0 0 0-.697-.091c-.81.19-2.118.516-3.07.755a.744.744 0 0 1-.908-.888c.237-1.025.565-2.452.72-3.165.049-.222.019-.45-.077-.656-.57-1.22-.917-2.572-.917-3.992 0-4.053 2.715-7.502 6.416-8.62"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.864 13.916c-1.849-1.848-2.9-4.062-1.513-5.455l.128-.129a1.268 1.268 0 0 1 1.937.17q.217.314.462.661c.352.503.297 1.191-.135 1.627l-.233.236c.684 1.027 1.197 1.607 2.21 2.21l.236-.234a1.27 1.27 0 0 1 1.626-.134l.66.461c.647.452.729 1.38.17 1.937l-.128.128c-.885.881-2.088.792-3.321.136"
    />
  </Svg>
);
export default IconlystWhatsappBroken;
