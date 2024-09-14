import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentExploreBulk = ({
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
      d="M19.854 9.094H16.89c-1.767-.009-3.225-1.472-3.225-3.256v-3.14a.445.445 0 0 0-.443-.448H8.066c-2.404 0-4.354 1.979-4.354 4.397v10.511c0 2.535 2.047 4.592 4.557 4.592h7.675c2.403 0 4.344-1.96 4.344-4.378V9.533a.435.435 0 0 0-.434-.439"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.16 16.983a.75.75 0 0 0 .53-1.281l-.948-.948c.336-.533.516-1.15.516-1.795a3.35 3.35 0 0 0-.988-2.385 3.38 3.38 0 0 0-4.769.001 3.38 3.38 0 0 0 .001 4.77 3.38 3.38 0 0 0 4.178.47l.949.948c.147.146.339.22.531.22m-4.598-5.348a1.87 1.87 0 0 1 1.324-.547 1.87 1.87 0 0 1 1.326 3.192l-.004.003a1.876 1.876 0 0 1-2.645-.001 1.874 1.874 0 0 1-.001-2.647M17.016 7.672c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.28-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325v2.569c0 1.078.879 1.966 1.946 1.966"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentExploreBulk;
