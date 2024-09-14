import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDurianLight = ({
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
      d="m8.654 6.662 1.022-1.496L12 5.421l2.324-.255 1.022 1.496 2.08.657v2.116l1.641 1.605-.657 1.934.657 2.225-1.204 1.204-.438 2.335-1.714.438L14.835 21l-2.89-.699-2.78.699-.876-1.824-1.715-.438-.437-2.335L4.933 15.2l.656-2.225-.656-1.934 1.641-1.605V7.319z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.521 3c.309.332.68 1.077.515 2.368M13.782 16.423l1.057-.73-.54-1.488.908-.926-.909-1.207.54-1.151-1.056-.87M10.218 16.423l-1.057-.73.54-1.488-.909-.926.91-1.207-.54-1.151 1.056-.87"
    />
  </Svg>
);
export default IconlystDurianLight;
