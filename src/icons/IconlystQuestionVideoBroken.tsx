import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuestionVideoBroken = ({
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
      d="M8.912 15.25v.049M8.998 13.048c.286-.508.624-.647 1.095-.915.574-.316.963-.82.963-1.519A1.866 1.866 0 0 0 9.19 8.746a1.86 1.86 0 0 0-1.867 1.868"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.723 19.245c2.374 0 3.852-1.676 3.852-4.047V8.801c0-2.371-1.478-4.047-3.85-4.047H5.933c-2.367 0-3.85 1.676-3.85 4.047v6.397c0 2.371 1.476 4.047 3.85 4.047h3.395"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.568 14.013 3.407 2.788a1.292 1.292 0 0 0 2.11-1v-3.223M16.568 9.992l3.394-2.787a1.291 1.291 0 0 1 2.11.996l.003.9"
    />
  </Svg>
);
export default IconlystQuestionVideoBroken;
