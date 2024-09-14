import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteKeyTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.729 12.431V8.498c0-2.857-1.779-4.875-4.639-4.875H7.91c-2.851 0-4.639 2.018-4.639 4.875v7.707c0 2.856 1.78 4.874 4.639 4.874h3.698M11.578 7.064h-.064m-5.036 0h-.064zm2.55 0h-.064z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.729 9.916H3.27M13.934 15.063l.01.01"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.243 19.004-2.848-2.849c.048-.217.08-.436.08-.668a3.136 3.136 0 1 0-2.17 2.985l.646.644h.75v1.143h1.161v.744c0 .21.17.38.381.38h1.731a.38.38 0 0 0 .381-.38v-1.73a.38.38 0 0 0-.112-.269"
    />
  </Svg>
);
export default IconlystWebsiteKeyTwoTone;
