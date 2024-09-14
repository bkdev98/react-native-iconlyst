import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAutoBrightnessBroken = ({
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
      d="m9.78 14.887 2.792-6 2.792 6m-4.651-1.95h3.725"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.305 15.734v1.18c0 .647 0 .97-.116 1.222a1.26 1.26 0 0 1-.617.617c-.25.116-.574.116-1.22.116H16.17c-.283 0-.424 0-.558.029a1.3 1.3 0 0 0-.41.17c-.114.073-.214.173-.414.373l-.835.835c-.457.457-.686.686-.945.782a1.26 1.26 0 0 1-.873 0c-.26-.096-.488-.325-.945-.782l-.835-.835c-.2-.2-.3-.3-.415-.373a1.3 1.3 0 0 0-.41-.17c-.133-.03-.274-.03-.557-.03H7.793c-.647 0-.97 0-1.221-.115a1.26 1.26 0 0 1-.617-.617c-.116-.251-.116-.575-.116-1.221v-1.182c0-.282 0-.423-.03-.557a1.3 1.3 0 0 0-.17-.41c-.073-.114-.173-.214-.372-.414l-.835-.835c-.458-.457-.686-.686-.782-.945a1.26 1.26 0 0 1 0-.873c.096-.26.325-.488.782-.945M5.839 8.539V7.357c0-.646 0-.97.116-1.22a1.26 1.26 0 0 1 .617-.618c.25-.115.574-.115 1.22-.115h1.182c.283 0 .424 0 .557-.03a1.3 1.3 0 0 0 .41-.17c.115-.073.215-.173.415-.373l.835-.835c.457-.457.686-.686.945-.781a1.26 1.26 0 0 1 .873 0c.26.095.488.324.945.781l.835.835c.2.2.3.3.415.374q.19.12.41.17c.133.029.274.029.557.029h1.18c.647 0 .97 0 1.221.115.273.126.492.345.617.617.116.252.116.575.116 1.221v1.181c0 .283 0 .424.03.557q.047.22.17.41c.073.115.173.215.372.415l.836.835c.457.457.686.686.781.945a1.26 1.26 0 0 1 0 .873c-.095.26-.324.488-.781.945"
    />
  </Svg>
);
export default IconlystAutoBrightnessBroken;
