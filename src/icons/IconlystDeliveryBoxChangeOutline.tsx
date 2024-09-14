import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxChangeOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.477 3.895a4.474 4.474 0 0 0-3.34 4.327.75.75 0 1 1-1.5 0A5.97 5.97 0 0 1 8.61 2.25a.75.75 0 0 1 .703 1.011l-.62 1.668a.75.75 0 1 1-1.406-.523zm8.246-1.382a1.96 1.96 0 0 1 1.96 0l2.898 1.673c.607.35.98.998.98 1.697V9.23c0 .7-.373 1.348-.98 1.698L17.683 12.6c-.267.154-.562.24-.86.26a.8.8 0 0 1-.24 0 1.96 1.96 0 0 1-.86-.26l-2.899-1.673a1.96 1.96 0 0 1-.98-1.698V5.883a1.96 1.96 0 0 1 .98-1.697zm-2.378 3.954V9.23c0 .165.088.317.23.399l2.378 1.373V7.975zm4.108 1.505v3.03l2.378-1.373a.46.46 0 0 0 .23-.399V6.463zm1.84-2.797-2.592 1.5-2.592-1.499 2.364-1.364a.46.46 0 0 1 .46 0zM6.517 11.393a1.96 1.96 0 0 1 1.96 0l2.898 1.673c.607.35.98.998.98 1.698v3.347c0 .7-.373 1.347-.98 1.697l-2.898 1.674c-.267.154-.562.24-.86.258a.8.8 0 0 1-.24 0 1.96 1.96 0 0 1-.86-.258l-2.899-1.674a1.96 1.96 0 0 1-.98-1.697v-3.347c0-.7.374-1.347.98-1.697zm1.73 8.49 2.378-1.374a.46.46 0 0 0 .23-.398v-2.767l-2.608 1.51zm-1.5-3.029v3.028L4.367 18.51a.46.46 0 0 1-.23-.398v-2.765zm.75-1.3 2.591-1.499-2.36-1.363a.46.46 0 0 0-.46 0l-2.364 1.364zm13.316-.527a.75.75 0 0 1 .75.75 5.97 5.97 0 0 1-5.972 5.972.75.75 0 0 1-.703-1.011l.62-1.668a.75.75 0 1 1 1.406.523l-.19.511a4.474 4.474 0 0 0 3.339-4.327.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxChangeOutline;
