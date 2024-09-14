import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLowBrightnessBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.733 15.734v1.18c0 .647 0 .97-.116 1.222a1.26 1.26 0 0 1-.617.617c-.251.116-.574.116-1.221.116h-1.18c-.283 0-.425 0-.558.029a1.3 1.3 0 0 0-.41.17c-.115.073-.215.173-.414.373l-.835.835c-.458.457-.686.686-.946.782a1.26 1.26 0 0 1-.872 0c-.26-.096-.488-.325-.946-.782l-.835-.835c-.2-.2-.3-.3-.415-.373a1.3 1.3 0 0 0-.409-.17c-.133-.03-.275-.03-.557-.03H7.22c-.646 0-.97 0-1.22-.115a1.26 1.26 0 0 1-.618-.617c-.115-.251-.115-.575-.115-1.221v-1.182c0-.282 0-.423-.03-.557a1.3 1.3 0 0 0-.17-.41c-.073-.114-.173-.214-.373-.414l-.835-.835c-.457-.457-.685-.686-.781-.945a1.26 1.26 0 0 1 0-.873c.096-.26.324-.488.781-.945M5.267 8.539V7.357c0-.646 0-.97.115-1.22A1.26 1.26 0 0 1 6 5.518c.252-.115.575-.115 1.221-.115h1.182c.282 0 .424 0 .557-.03a1.3 1.3 0 0 0 .41-.17c.115-.073.215-.173.414-.373l.835-.835c.458-.457.686-.686.946-.781a1.26 1.26 0 0 1 .872 0c.26.095.488.324.946.781l.835.835c.2.2.3.3.415.374q.19.12.409.17c.133.029.275.029.557.029h1.181c.647 0 .97 0 1.221.115.273.126.491.345.617.617.116.252.116.575.116 1.221v1.181c0 .283 0 .424.03.557q.047.22.169.41c.074.115.173.215.373.415l.836.835c.457.457.685.686.781.945a1.26 1.26 0 0 1 0 .873c-.096.26-.324.488-.781.945"
    />
  </Svg>
);
export default IconlystLowBrightnessBroken;