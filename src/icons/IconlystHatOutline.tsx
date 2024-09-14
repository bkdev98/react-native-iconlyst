import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHatOutline = ({
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
      fillRule="evenodd"
      d="M10.425 9.908c-.547 1.428-.894 3.34-.894 5.182a.75.75 0 0 1-1.5 0c0-2.006.374-4.101.993-5.718.308-.806.693-1.533 1.154-2.073.454-.531 1.067-.973 1.823-.973s1.37.442 1.824.973c.46.54.845 1.267 1.153 2.073.619 1.617.993 3.712.993 5.718a.75.75 0 0 1-1.5 0c0-1.843-.347-3.754-.894-5.182-.274-.717-.583-1.272-.893-1.634-.316-.37-.55-.448-.683-.448s-.367.078-.683.448c-.31.362-.619.917-.893 1.634"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 6.326a.996.996 0 1 1 0-1.992.996.996 0 0 1 0 1.992M9.504 5.33a2.496 2.496 0 1 0 4.991 0 2.496 2.496 0 0 0-4.991 0M5.175 14.677a.75.75 0 0 1-.446.963c-.544.2-.803.444-.956.73-.172.323-.263.797-.273 1.554-.008.722.103 1.186.298 1.51.186.308.503.577 1.096.8.609.227 1.462.387 2.65.492 1.18.104 2.644.15 4.456.17 1.812-.02 3.276-.066 4.456-.17 1.188-.105 2.041-.265 2.65-.492.593-.223.91-.492 1.096-.8.195-.324.306-.788.297-1.51-.009-.757-.1-1.23-.272-1.554-.153-.286-.412-.53-.956-.73a.75.75 0 0 1 .517-1.408c.805.295 1.397.749 1.762 1.432.345.648.44 1.417.45 2.242.01.86-.116 1.643-.514 2.303-.407.675-1.04 1.125-1.854 1.43-.799.298-1.81.473-3.045.581-1.241.11-2.755.155-4.578.176h-.018c-1.823-.02-3.337-.067-4.578-.176-1.234-.108-2.246-.283-3.045-.582-.813-.304-1.447-.754-1.854-1.43-.398-.66-.524-1.442-.513-2.302.01-.825.104-1.594.45-2.242.364-.683.956-1.137 1.761-1.433a.75.75 0 0 1 .963.446"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.269 14.469c5.214.916 8.258.907 13.463-.001-.157-1.528-.874-3.093-1.978-4.329-1.25-1.4-2.938-2.313-4.753-2.313-1.816 0-3.503.913-4.754 2.313-1.104 1.236-1.822 2.802-1.978 4.33m.859-5.329C7.597 7.496 9.666 6.326 12 6.326c2.334 0 4.404 1.17 5.872 2.814 1.466 1.641 2.391 3.818 2.391 5.95a.75.75 0 0 1-.615.738c-6.003 1.093-9.28 1.105-15.298 0a.75.75 0 0 1-.615-.738c0-2.132.926-4.309 2.392-5.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHatOutline;
