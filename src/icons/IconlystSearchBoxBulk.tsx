import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchBoxBulk = ({
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
      d="M11.975 2.499c-4.64 0-8.41 3.77-8.41 8.42s3.77 8.42 8.41 8.42a8.42 8.42 0 0 0 0-16.84"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.84 19.795-1.983-1.98a1 1 0 0 0-1.413 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416M16.085 12.35c0 .6-.32 1.14-.82 1.43l-2.5 1.45c-.23.12-.48.19-.73.2-.03 0-.06.02-.09.02-.04 0-.07-.02-.1-.02-.26-.01-.5-.08-.73-.2l-2.5-1.45c-.51-.29-.83-.83-.83-1.43V9.47c0-.3.08-.59.23-.83.01 0 .01 0 .01-.01l.03-.03c.13-.23.33-.42.57-.56l2.49-1.44c.51-.3 1.14-.3 1.65 0l2.5 1.44c.5.29.82.84.82 1.43zm-6.87.39a.45.45 0 0 1-.23-.39V9.88l2.36 1.36v2.73zm2.72-5.16c.08 0 .15.02.23.06l2.1 1.21-2.33 1.35-2.33-1.34 2.12-1.22c.06-.04.14-.06.21-.06m2.73 5.16-2.12 1.23v-2.73l2.34-1.36v2.47c0 .16-.09.31-.22.39"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchBoxBulk;
