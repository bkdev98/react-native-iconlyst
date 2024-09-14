import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="m19.865 6.172-.403-.233.403-.233a1 1 0 0 0-1-1.732l-.401.231v-.464a1 1 0 0 0-2 0v.467l-.405-.234a1 1 0 1 0-1 1.732l.402.233-.402.232a1 1 0 0 0 1 1.732l.405-.233v.466a1 1 0 1 0 2 0v-.463l.4.231a.998.998 0 0 0 1.366-.366 1 1 0 0 0-.365-1.366"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.75 19.757a1 1 0 0 0-.997-1.733 1 1 0 0 0-2 .001h-.001a1 1 0 0 0-1 1.732 1 1 0 0 0 1 1.732 1 1 0 0 0 2 .001.998.998 0 0 0 1.363-.367 1 1 0 0 0-.364-1.366"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="m15.46 17.124-4.47-2.58 4.47-2.582a1 1 0 1 0-1-1.733l-4.472 2.583V7.65a1 1 0 0 0-2 0v5.16L3.52 10.23a1 1 0 1 0-1 1.733l4.47 2.581-4.47 2.581a1 1 0 1 0 1 1.732l4.468-2.58v5.16a1 1 0 1 0 2 0v-5.162l4.472 2.582a.998.998 0 0 0 1.366-.366 1 1 0 0 0-.366-1.366"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M8.991 11.735c-.266 0-.52-.106-.708-.293L6.131 9.289a1 1 0 0 1 1.415-1.414L8.991 9.32l1.447-1.446a.999.999 0 1 1 1.413 1.414l-2.153 2.153a1 1 0 0 1-.707.293M8.283 17.645c.375-.374 1.04-.374 1.415 0l2.154 2.153a1 1 0 0 1-1.414 1.414l-1.447-1.446-1.444 1.446a1 1 0 1 1-1.415-1.414zM11.324 12.38a.997.997 0 0 0 .707 1.224l2.942.788q.131.034.259.034a1 1 0 0 0 .259-1.966l-1.976-.529.53-1.974a1 1 0 0 0-1.932-.517zM6.557 15.948c.133.23.17.503.1.758l-.788 2.942a1.001 1.001 0 0 1-1.932-.517l.53-1.977-1.975-.527a1 1 0 1 1 .517-1.932l2.941.787c.256.069.475.237.607.466M14.972 14.695l-2.941.787a.997.997 0 0 0-.707 1.225l.787 2.94a1 1 0 1 0 1.931-.517l-.528-1.975 1.975-.528a1 1 0 0 0-.518-1.932M3.01 14.393a1 1 0 1 1-.519-1.932l1.976-.53-.53-1.974a1 1 0 0 1 1.932-.517l.789 2.94a1 1 0 0 1-.706 1.224z"
    />
  </Svg>
);
export default IconlystSnowBulk;
