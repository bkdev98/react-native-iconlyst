import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPeppersLight = ({
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
      d="M16.156 12.713c1.478 3.832-3.012 6.978-5.736 6.518 4.951 4.82 13.686-3.828 9.459-9.574-.797-1.083-1.924-1.25-3.11-.377-.511.376-.969.74-1.064 1.369-.096.627.15 1.28.451 2.064M9.59 7.423C9.087 10.677 4.71 11.07 3 9.663c1.517 5.33 11.043 2.804 10.399-2.879-.121-1.07-.839-1.636-2.011-1.503-.506.057-.97.128-1.287.526-.317.399-.408.95-.51 1.616"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.698 10.153c-.946-1.286-1.653-3.348.415-4.217M11.72 6.641c-.144-1.271.363-3.131 1.67-3.28"
    />
  </Svg>
);
export default IconlystPeppersLight;
