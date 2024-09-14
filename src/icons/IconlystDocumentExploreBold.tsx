import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentExploreBold = ({
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
      d="M10.886 11.088c-.48 0-.96.182-1.324.547a1.874 1.874 0 0 0 0 2.646 1.876 1.876 0 0 0 2.646.002l.004-.003c.352-.354.546-.823.546-1.322s-.194-.97-.548-1.325a1.87 1.87 0 0 0-1.324-.545M17.016 7.672c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.28-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325v2.569c0 1.078.879 1.966 1.946 1.966"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.69 16.762a.75.75 0 0 1-1.06 0l-.95-.95a3.38 3.38 0 0 1-4.178-.47 3.38 3.38 0 0 1 0-4.768 3.38 3.38 0 0 1 4.768-.001 3.35 3.35 0 0 1 .988 2.385c0 .645-.18 1.262-.516 1.795l.948.948a.75.75 0 0 1 0 1.06m5.16-7.667h-2.963c-1.765-.01-3.223-1.471-3.223-3.255V2.702a.444.444 0 0 0-.443-.448H8.068c-2.403 0-4.352 1.978-4.352 4.395v10.506c0 2.534 2.046 4.59 4.555 4.59h7.671c2.402 0 4.342-1.96 4.342-4.376V9.534a.435.435 0 0 0-.434-.44"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentExploreBold;
