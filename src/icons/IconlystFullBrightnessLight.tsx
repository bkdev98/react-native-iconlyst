import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFullBrightnessLight = ({
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
    <Circle
      cx={11.999}
      cy={12.138}
      r={3.501}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.598 5.404c-.282 0-.424 0-.557-.03a1.3 1.3 0 0 1-.41-.17c-.115-.073-.215-.173-.414-.373l-.835-.835c-.458-.457-.686-.686-.946-.781a1.26 1.26 0 0 0-.872 0c-.26.095-.488.324-.946.781l-.835.835c-.2.2-.3.3-.414.374a1.3 1.3 0 0 1-.41.17c-.133.029-.275.029-.557.029H7.22c-.646 0-.97 0-1.22.115a1.26 1.26 0 0 0-.618.617c-.115.252-.115.575-.115 1.221V8.54c0 .282 0 .424-.03.557a1.3 1.3 0 0 1-.17.41c-.073.115-.173.215-.373.414l-.835.835c-.457.457-.685.686-.781.945a1.26 1.26 0 0 0 0 .873c.096.26.324.488.781.945l.835.835c.2.2.3.3.374.415q.12.19.17.41c.029.133.029.274.029.557v1.181c0 .647 0 .97.115 1.221.126.273.345.491.617.617.251.116.575.116 1.221.116h1.182c.282 0 .424 0 .557.03q.22.047.41.169c.115.073.214.173.414.373l.835.835c.458.457.686.686.946.782.281.104.59.104.872 0 .26-.096.488-.325.946-.782l.835-.835c.2-.2.3-.3.415-.373a1.3 1.3 0 0 1 .409-.17c.133-.03.275-.03.557-.03h1.181c.647 0 .97 0 1.221-.115a1.26 1.26 0 0 0 .617-.617c.116-.251.116-.574.116-1.221v-1.18c0-.283 0-.425.03-.558q.047-.22.169-.41c.073-.115.173-.215.373-.414l.836-.836c.457-.457.685-.686.781-.945a1.26 1.26 0 0 0 0-.873c-.096-.26-.324-.488-.781-.945l-.836-.835c-.2-.2-.3-.3-.373-.415a1.3 1.3 0 0 1-.17-.41c-.03-.133-.03-.274-.03-.557v-1.18c0-.647 0-.97-.115-1.222A1.26 1.26 0 0 0 18 5.52c-.251-.115-.574-.115-1.221-.115z"
    />
  </Svg>
);
export default IconlystFullBrightnessLight;
