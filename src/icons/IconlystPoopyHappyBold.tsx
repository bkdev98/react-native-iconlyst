import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopyHappyBold = ({
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
      d="M16.2 12.288a.75.75 0 0 1-1.5 0c0-.414.335-.755.75-.755.413 0 .75.33.75.744zm-1.037 3.918c-.64.694-1.357 1.032-2.19 1.032q-1.251-.021-2.157-1.042a.749.749 0 1 1 1.121-.996c.322.36.654.532 1.047.538.397 0 .722-.164 1.075-.548a.75.75 0 0 1 1.104 1.016m-5.337-3.918c0-.414.336-.755.75-.755s.75.33.75.744v.011a.75.75 0 0 1-1.5 0m10.003.249.001-.069c0-1.846-1.245-3.427-2.922-3.824l.005-.039c.218-1.875-.873-3.496-3.08-4.57l-.218-.103c-.4-.192-.855-.409-1.314-.488a.52.52 0 0 0-.456.173.52.52 0 0 0-.1.485c.133.448.297 1.587-1.089 2.525a3.67 3.67 0 0 0-1.358 1.964c-1.806.299-3.17 1.93-3.17 3.877l.001.074c-1.555.506-2.64 2.008-2.64 3.735 0 1.951 1.404 3.453 3.694 3.925 1.672.253 3.967.357 6.124.357 2.563 0 4.93-.147 5.82-.366 1.55-.383 3.361-1.637 3.361-3.916 0-1.741-1.094-3.246-2.659-3.74"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPoopyHappyBold;
