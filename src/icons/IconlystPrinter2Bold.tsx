import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPrinter2Bold = ({
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
      d="M17.61 11.25h-2.24a.749.749 0 1 1 0-1.5h2.24c.42 0 .75.34.75.75 0 .42-.33.75-.75.75M8.16 5.37c0-.73.6-1.33 1.33-1.33h5.02c.73 0 1.33.6 1.33 1.33v1.06H8.16zm9.52 1.06h-.34V5.37c0-1.56-1.27-2.83-2.83-2.83H9.49c-1.56 0-2.83 1.27-2.83 2.83v1.06h-.33c-2.11 0-3.83 1.71-3.83 3.82v4.01c0 1.99 1.52 3.615 3.462 3.796.113.01.208-.08.208-.194V15.71a.2.2 0 0 0-.2-.2h-.01c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h12.08c.42 0 .75.34.75.75 0 .42-.33.75-.75.75h-.02a.2.2 0 0 0-.2.2v2.153c0 .113.094.204.207.194A3.81 3.81 0 0 0 21.5 14.26v-4.01a3.82 3.82 0 0 0-3.82-3.82"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.41 17.53c0-.42.33-.75.75-.75h1.68c.42 0 .75.33.75.75v.05c-.03.39-.35.7-.75.7h-1.68c-.4 0-.72-.31-.75-.7zm-2.74 2.38c0 .85.7 1.55 1.56 1.55h5.54c.86 0 1.55-.7 1.55-1.55v-4.2a.2.2 0 0 0-.2-.2H7.87a.2.2 0 0 0-.2.2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPrinter2Bold;