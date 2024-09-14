import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskRecevieBulk = ({
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
      d="m21.2 8.059-4.474-4.662A2.94 2.94 0 0 0 14.62 2.5H9.522a.2.2 0 0 0-.2.2v2.022a.75.75 0 0 1-1.5 0V2.759c0-.117-.1-.209-.215-.196-2.768.304-4.593 2.408-4.593 5.463v1.012c0 .11.09.2.2.2h2.753a2 2 0 0 1 3.411-1.382l1.966 1.966q.14.14.25.306c.034.051.057.105.086.157.034.062.07.122.098.188.029.068.045.139.066.21.015.054.037.106.048.162.052.259.05.526 0 .785-.011.055-.032.106-.047.159-.021.072-.038.145-.067.214-.025.062-.061.118-.092.177-.031.056-.056.114-.092.168a2 2 0 0 1-.216.264q-.015.02-.031.039l-1.968 1.97a1.996 1.996 0 0 1-2.83 0 2 2 0 0 1-.583-1.383H3.214a.2.2 0 0 0-.2.2v2.535c0 3.055 1.825 5.16 4.593 5.464a.195.195 0 0 0 .215-.196v-2.525a2.586 2.586 0 0 1 2.583-2.584h4.222a2.586 2.586 0 0 1 2.583 2.584v2.525c0 .117.1.209.215.196 2.766-.307 4.589-2.41 4.589-5.464V10.08c0-.758-.29-1.476-.813-2.021"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.626 17.632h-4.222c-.597 0-1.083.486-1.083 1.084V21.3c0 .11.09.2.2.2h5.988a.2.2 0 0 0 .2-.2v-2.584c0-.598-.485-1.084-1.083-1.084M7.457 12.677a.75.75 0 1 0 1.061 1.061l1.967-1.97a.76.76 0 0 0 .162-.817.8.8 0 0 0-.162-.243L8.518 8.74a.75.75 0 1 0-1.06 1.061l.686.687H2.736a.75.75 0 0 0 0 1.5h5.41z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFloppyDiskRecevieBulk;
