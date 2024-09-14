import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookAiAltLight = ({
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
      d="M19.639 15.962H6.88a2.519 2.519 0 0 0 0 5.038H19.64c-1.808-.738-2.06-3.853 0-5.038"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.639 15.962V4.008C19.639 3.45 19.188 3 18.63 3H6.881a2.52 2.52 0 0 0-2.52 2.519v12.975"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.04 11.28-.102-.275a3.8 3.8 0 0 0-2.239-2.242l-.275-.101.275-.102a3.8 3.8 0 0 0 2.239-2.242l.101-.276.102.276A3.8 3.8 0 0 0 12.38 8.56l.275.102-.275.101a3.8 3.8 0 0 0-2.239 2.242zM15.39 12.532a1.78 1.78 0 0 0-1.185-1.187 1.78 1.78 0 0 0 1.185-1.188 1.78 1.78 0 0 0 1.186 1.188 1.78 1.78 0 0 0-1.186 1.187"
    />
  </Svg>
);
export default IconlystBookAiAltLight;
