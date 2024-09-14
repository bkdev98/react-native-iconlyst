import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileOpenLight = ({
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
      d="M8.04 18.475a2.41 2.41 0 0 1-2.407 2.409l13.122.003a2.41 2.41 0 0 0 2.407-2.408l.063-4.793c0-2.148-1.33-3.16-2.912-3.16h-7.359c-1.583 0-2.912 1.012-2.912 3.16z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.856 10.752V9.704c-.051-2.537-1.615-3.772-4.48-3.772h-1.532a2.12 2.12 0 0 1-1.692-.847l-.847-1.125a2.12 2.12 0 0 0-1.69-.847H7.76c-3.318 0-4.536 1.956-4.536 5.268v10.094a2.41 2.41 0 0 0 2.408 2.409"
    />
  </Svg>
);
export default IconlystFolderFileOpenLight;
