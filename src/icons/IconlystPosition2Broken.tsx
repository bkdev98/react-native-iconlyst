import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPosition2Broken = ({
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
      d="m9.824 6.426.539-.748m3.812.748L12 4.25v5.538M14.175 18.073l-.538.748m-3.813-.748L12 20.25v-5.538M17.823 10.074l.748.539m-.748 3.812L20 12.25h-5.538M6.176 14.425l-.748-.538m.748-3.813L4 12.25h5.538"
    />
  </Svg>
);
export default IconlystPosition2Broken;
