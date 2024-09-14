import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartUpBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M21.38 6.259c-.36-.48-.94-.72-1.51-.75l-13.52.11-.63-2.64a.75.75 0 0 0-.73-.58H3c-.42 0-.75.33-.75.75 0 .41.33.75.75.75h1.4l2.52 10.65c.32 1.36 1.54 2.3 2.91 2.3.09 0 .18 0 .27-.01l6.94-.64a3.22 3.22 0 0 0 2.79-2.28l1.84-6c.17-.58.06-1.18-.29-1.66"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.863 19.138a1.231 1.231 0 1 0 .003 2.462 1.231 1.231 0 0 0-.003-2.462M18.074 19.138a1.231 1.231 0 1 0 .003 2.462 1.231 1.231 0 0 0-.003-2.462"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M14.25 13.799h1.09c.42 0 .75-.33.75-.75 0-.41-.33-.75-.75-.75h-1.09c-.73 0-1.33-.59-1.33-1.32v-1.28l.32.32c.15.15.34.22.53.22s.39-.07.53-.22c.3-.29.3-.77 0-1.06l-1.6-1.6a.774.774 0 0 0-1.06 0l-1.6 1.6c-.29.29-.29.77 0 1.06s.77.29 1.06 0l.32-.32v1.28c0 1.55 1.27 2.82 2.83 2.82"
    />
  </Svg>
);
export default IconlystShoppingCartUpBulk;
