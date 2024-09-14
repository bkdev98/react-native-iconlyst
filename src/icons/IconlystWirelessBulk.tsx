import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessBulk = ({
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
      d="M9.278 2.284c-1.062-.267-2.093.014-2.827.776a3.29 3.29 0 0 0-.781 3.152c.295 1.005 1.085 1.728 2.146 1.98 4.275 1.098 7.5 4.78 8.027 9.16.117.963-.847 1.11-.958 1.123-.231.03-.997.056-1.106-.802-.45-4.048-3.718-7.28-7.772-7.685a1 1 0 1 0-.2 1.99c3.12.312 5.638 2.8 5.986 5.93.244 1.917 1.859 2.739 3.338 2.552 1.48-.182 2.93-1.417 2.699-3.346-.625-5.193-4.45-9.557-9.534-10.864-.383-.091-.615-.288-.707-.602-.116-.393.012-.9.303-1.201.234-.243.525-.317.895-.224 7.162 1.82 11.849 8.48 11.144 15.835a1 1 0 0 0 1.99.19c.8-8.342-4.516-15.898-12.643-17.964"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.261 19.503a1.4 1.4 0 0 1-1.018.306 1.36 1.36 0 0 1-.926-.491 1.37 1.37 0 0 1-.312-1.016c.05-.503.371-.94.85-1.14q.255-.111.526-.111c.226 0 .453.059.665.176a1.376 1.376 0 0 1 .215 2.276m.74-4.034a3.31 3.31 0 0 0-2.933-.146 3.38 3.38 0 0 0-1.29 5.27A3.33 3.33 0 0 0 5.053 21.8q.17.017.34.017a3.36 3.36 0 0 0 2.137-.767 3.36 3.36 0 0 0 1.22-2.288 3.35 3.35 0 0 0-1.75-3.292"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessBulk;
