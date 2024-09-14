import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentStarBold = ({
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
      d="m11.544 12.363-.389-.78-.393.79a1.04 1.04 0 0 1-.765.56l-.875.127.625.6c.246.246.354.583.299.912l-.151.863.79-.414c.293-.163.663-.162.971.01l.762.399-.148-.85a1.01 1.01 0 0 1 .298-.918l.622-.602-.867-.125a1.02 1.02 0 0 1-.78-.572M17.015 7.672c.673.007 1.608.01 2.401.007a.465.465 0 0 0 .331-.787l-1.93-2.027-1.955-2.053a.46.46 0 0 0-.793.325v2.569c0 1.078.88 1.966 1.946 1.966"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.921 13.474-1.131 1.093.273 1.553a1.033 1.033 0 0 1-1.489 1.084l-1.413-.74-1.417.74a1.028 1.028 0 0 1-1.495-1.076l.275-1.562-1.144-1.1a1.023 1.023 0 0 1-.01-1.463c.171-.156.353-.247.551-.284l1.607-.233.705-1.416c.112-.24.333-.433.599-.52a1.04 1.04 0 0 1 1.244.516l.002.004.705 1.417 1.576.227a1.023 1.023 0 0 1 .562 1.76m4.928-4.38h-2.962c-1.766-.008-3.223-1.47-3.223-3.254V2.702a.444.444 0 0 0-.444-.448H8.067c-2.402 0-4.351 1.978-4.351 4.395v10.506c0 2.534 2.045 4.59 4.554 4.59h7.671c2.403 0 4.343-1.96 4.343-4.375V9.534a.435.435 0 0 0-.435-.44"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentStarBold;
