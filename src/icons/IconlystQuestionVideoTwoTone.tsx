import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuestionVideoTwoTone = ({
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
      d="M6.184 4.754h6.79c2.373 0 3.851 1.676 3.851 4.047v6.397c0 2.371-1.478 4.047-3.852 4.047h-6.79c-2.373 0-3.849-1.676-3.849-4.047V8.801c0-2.371 1.483-4.047 3.85-4.047M9.162 15.25v.049"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.248 13.048c.286-.508.624-.647 1.095-.915.574-.316.963-.82.963-1.519A1.866 1.866 0 0 0 9.44 8.746a1.86 1.86 0 0 0-1.867 1.868"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.818 9.99 3.407-2.788a1.292 1.292 0 0 1 2.11 1l-.013 7.602a1.291 1.291 0 0 1-2.11.995l-3.394-2.787"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystQuestionVideoTwoTone;
