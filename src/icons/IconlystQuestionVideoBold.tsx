import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuestionVideoBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M23.095 7.065a1.796 1.796 0 0 0-2.52-.249L19.349 7.82c-.258.21-.376.534-.36.867q.003.057.003.115v6.401l-.003.123c-.017.33.101.653.358.864l1.214.998c.316.261.719.404 1.134.404.986 0 1.791-.802 1.794-1.789l.012-7.598a1.8 1.8 0 0 0-.406-1.14M11.466 12.64l-.16.09c-.35.2-.49.28-.64.54-.14.25-.39.38-.65.38-.13 0-.25-.03-.37-.09a.753.753 0 0 1-.29-1.02c.36-.64.8-.88 1.22-1.12l.16-.09c.59-.31.59-.73.59-.87 0-.61-.51-1.11-1.12-1.11-.62 0-1.12.5-1.12 1.11 0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75 0-1.43 1.18-2.61 2.62-2.61s2.62 1.18 2.62 2.61c0 .92-.5 1.72-1.36 2.18m-.79 2.51c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75 0-.41.34-.77.75-.77.42 0 .75.31.75.72zm2.63-10.9h-6.79c-2.6 0-4.35 1.83-4.35 4.55v6.4c0 2.72 1.75 4.55 4.35 4.55h6.79c2.6 0 4.35-1.83 4.35-4.55V8.8c0-2.72-1.75-4.55-4.35-4.55"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystQuestionVideoBold;
