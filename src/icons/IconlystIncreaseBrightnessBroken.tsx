import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIncreaseBrightnessBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.147 12.136h4.727m-2.365-2.363V14.5M19.245 15.734v1.18c0 .647 0 .97-.116 1.222a1.26 1.26 0 0 1-.617.617c-.251.116-.575.116-1.221.116H16.11c-.283 0-.424 0-.557.029a1.3 1.3 0 0 0-.41.17c-.115.073-.215.173-.415.373l-.835.835c-.457.457-.686.686-.945.782a1.26 1.26 0 0 1-.873 0c-.259-.096-.488-.325-.945-.782l-.835-.835c-.2-.2-.3-.3-.415-.373a1.3 1.3 0 0 0-.41-.17c-.133-.03-.274-.03-.557-.03H7.732c-.647 0-.97 0-1.221-.115a1.26 1.26 0 0 1-.617-.617c-.116-.251-.116-.575-.116-1.221v-1.182c0-.282 0-.423-.029-.557a1.3 1.3 0 0 0-.17-.41c-.073-.114-.173-.214-.373-.414l-.835-.835c-.457-.457-.686-.686-.781-.945a1.26 1.26 0 0 1 0-.873c.095-.26.324-.488.781-.945M5.778 8.539V7.357c0-.646 0-.97.116-1.22a1.26 1.26 0 0 1 .617-.618c.251-.115.575-.115 1.221-.115h1.182c.282 0 .423 0 .557-.03a1.3 1.3 0 0 0 .41-.17c.114-.073.214-.173.414-.373l.835-.835c.457-.457.686-.686.945-.781a1.26 1.26 0 0 1 .873 0c.26.095.488.324.945.781l.835.835c.2.2.3.3.415.374q.19.12.41.17c.133.029.274.029.557.029h1.18c.647 0 .97 0 1.222.115.272.126.491.345.617.617.116.252.116.575.116 1.221v1.181c0 .283 0 .424.029.557q.049.22.17.41c.073.115.173.215.373.415l.835.835c.458.457.686.686.782.945a1.26 1.26 0 0 1 0 .873c-.096.26-.324.488-.782.945"
    />
  </Svg>
);
export default IconlystIncreaseBrightnessBroken;
