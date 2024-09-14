import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReduceBrightnessTwoTone = ({
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
      d="M10.147 12.137h4.727"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.11 5.404c-.283 0-.424 0-.557-.03a1.3 1.3 0 0 1-.41-.17c-.115-.073-.215-.173-.415-.373l-.835-.835c-.457-.457-.686-.686-.945-.781a1.26 1.26 0 0 0-.873 0c-.259.095-.488.324-.945.781l-.835.835c-.2.2-.3.3-.415.374a1.3 1.3 0 0 1-.41.17c-.133.029-.274.029-.557.029H7.732c-.647 0-.97 0-1.221.115a1.26 1.26 0 0 0-.617.617c-.116.252-.116.575-.116 1.221V8.54c0 .282 0 .424-.029.557a1.3 1.3 0 0 1-.17.41c-.073.115-.173.215-.373.414l-.835.835c-.457.457-.686.686-.781.945a1.26 1.26 0 0 0 0 .873c.095.26.324.488.781.945l.835.835c.2.2.3.3.373.415q.121.19.17.41c.03.133.03.274.03.557v1.181c0 .647 0 .97.115 1.221.126.273.344.491.617.617.251.116.574.116 1.221.116h1.181c.283 0 .424 0 .558.03q.22.047.41.169c.114.073.214.173.414.373l.835.835c.457.457.686.686.945.782.282.104.591.104.873 0 .26-.096.488-.325.945-.782l.835-.835c.2-.2.3-.3.415-.373a1.3 1.3 0 0 1 .41-.17c.133-.03.274-.03.557-.03h1.18c.647 0 .97 0 1.222-.115.272-.126.491-.344.617-.617.116-.251.116-.574.116-1.221v-1.18c0-.283 0-.425.029-.558q.049-.22.17-.41c.073-.115.173-.215.373-.414l.835-.836c.457-.457.686-.686.782-.945a1.26 1.26 0 0 0 0-.873c-.096-.26-.325-.488-.782-.945l-.835-.835c-.2-.2-.3-.3-.374-.415a1.3 1.3 0 0 1-.17-.41c-.028-.133-.028-.274-.028-.557v-1.18c0-.647 0-.97-.116-1.222a1.26 1.26 0 0 0-.617-.617c-.251-.115-.575-.115-1.221-.115z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystReduceBrightnessTwoTone;
