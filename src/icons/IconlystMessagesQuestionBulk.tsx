import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesQuestionBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.021 5.657a9.42 9.42 0 0 0-6.719-2.79c-2.539 0-4.925.99-6.718 2.79-2.805 2.816-3.57 7.137-1.913 10.729.197.492.317.81.317 1.092 0 .333-.142.749-.279 1.15-.264.78-.565 1.663.079 2.309.647.649 1.531.343 2.309.075.398-.138.809-.28 1.135-.281.29 0 .656.147 1.079.318a9.516 9.516 0 0 0 10.71-1.916c3.701-3.715 3.701-9.76 0-13.476"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.729 13.18-.13.072c-.571.322-.774.483-.77.747a.75.75 0 0 1-.741.76h-.009a.75.75 0 0 1-.75-.74c-.016-1.202.955-1.748 1.535-2.074l.129-.073c.51-.283.755-.654.755-1.14a1.45 1.45 0 0 0-1.446-1.452c-.796 0-1.443.651-1.443 1.452a.75.75 0 0 1-1.5 0 2.95 2.95 0 0 1 2.943-2.952 2.95 2.95 0 0 1 2.946 2.952c0 1.036-.54 1.905-1.519 2.447m-1.522 3.852a.751.751 0 0 1-.864-.617.767.767 0 0 1 .615-.88.734.734 0 0 1 .86.598l.006.035a.75.75 0 0 1-.617.864"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesQuestionBulk;
