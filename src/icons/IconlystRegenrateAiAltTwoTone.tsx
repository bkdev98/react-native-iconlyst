import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRegenrateAiAltTwoTone = ({
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
      d="M19.123 8.707c0-2.333-1.454-3.98-3.788-3.98h-6.68c-2.328 0-3.788 1.647-3.788 3.98v3.248"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M4.87 15.291c0 2.333 1.452 3.98 3.786 3.98h6.68c2.336 0 3.789-1.647 3.789-3.98v-3.248" />
      <Path d="m21.001 13.928-1.885-1.885-1.876 1.876" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 10.07 1.885 1.886 1.876-1.875M10.359 11.577l-.08.215c-.299.81-.936 1.448-1.745 1.748l-.214.079.214.08c.809.3 1.446.938 1.746 1.747l.079.215.08-.215c.299-.81.936-1.448 1.745-1.748l.214-.079-.214-.08a2.96 2.96 0 0 1-1.746-1.747zM14.503 8.339a1.77 1.77 0 0 1-1.176 1.178 1.77 1.77 0 0 1 1.176 1.179 1.77 1.77 0 0 1 1.177-1.179 1.77 1.77 0 0 1-1.177-1.178"
    />
  </Svg>
);
export default IconlystRegenrateAiAltTwoTone;
