import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchEditBold = ({
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
      d="M13.214 7.808a.47.47 0 0 0-.32-.12.47.47 0 0 0-.35.15l-3.5 3.86c-.18.21-.31.48-.34.77l-.1.91c-.01.11.05.18.08.21s.1.08.21.06l.89-.15c.31-.05.59-.21.8-.44l3.47-3.81c.18-.2.17-.5-.03-.68z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.164 10.258-3.46 3.81c-.44.48-1.03.81-1.67.91l-.89.15q-.15.03-.3.03c-.44 0-.86-.17-1.19-.48-.4-.38-.6-.91-.54-1.46l.1-.92c.07-.6.32-1.17.72-1.61l3.51-3.86c.74-.8 1.99-.84 2.78-.12l.83.76c.79.74.84 1.99.11 2.79m-4.03-7.76a8.42 8.42 0 1 0 0 16.84 8.42 8.42 0 0 0 0-16.84M20.992 19.794l-1.983-1.979a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchEditBold;
