import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowDropLight = ({
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
      d="M15.985 8.863c.554 1.248 2.077 1.808 3.407 1.244s1.954-2.031 1.399-3.284C19.715 4.397 16.244 3 16.244 3s-1.336 3.437-.26 5.863M14.93 19.587c.536 1.205 2.006 1.746 3.29 1.201 1.283-.545 1.887-1.961 1.35-3.17-1.038-2.341-4.388-3.69-4.388-3.69s-1.29 3.317-.251 5.659M8.556 7.685 7.47 8.771 6.374 7.675M8.556 16.174 7.47 15.09l-1.096 1.096M7.465 8.771v6.314M11.687 10.752l-1.484-.398.402-1.498M4.335 14.998l.397-1.484-1.498-.4M10.2 10.351l-5.468 3.157M11.687 13.102l-1.484.397.402 1.498M4.335 8.856l.397 1.484-1.498.4M10.2 13.503l-5.468-3.157"
    />
  </Svg>
);
export default IconlystSnowDropLight;
