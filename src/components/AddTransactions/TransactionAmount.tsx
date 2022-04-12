import React, { useEffect, useMemo, useState } from "react";
import { AddTransactionAmountProps } from "../../types/componentsProps";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNumberWithCommas } from "../../hooks/custom/useNumberWithCommas";
import { normalize } from "../../utils/normalizeSize";
import Modal from "react-native-modal";
import { useFetchCurrency } from "../../hooks/currency/useFetchCurrency";
import { currencies } from "../../utils/currencies";

const TransactionAmount: React.FC<AddTransactionAmountProps> = ({
  amount,
  userCurrency,
  setUserCurrency,
}) => {
  const [isModal, setIsModal] = useState(false);
  const { data, isLoading } = useFetchCurrency();

  useEffect(() => {
    if (data) {
      setUserCurrency(data);
    }
  }, []);

  const { amountWithCommas } = useMemo(
    () => useNumberWithCommas(amount),
    [amount]
  );

  const onPressCurrency = (currency: string) => {
    setIsModal(false);
    setUserCurrency(currency);
  };

  return isLoading ? (
    <View></View>
  ) : (
    <View style={styles.addTransactionAmount}>
      <Modal
        isVisible={isModal}
        onBackButtonPress={() => setIsModal(false)}
        onBackdropPress={() => setIsModal(false)}
        useNativeDriver={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {currencies.map(
              (currency) =>
                currency.string !== userCurrency && (
                  <TouchableOpacity
                    onPress={() => onPressCurrency(currency.string)}
                  >
                    <Text style={styles.addTransactionCurrency}>
                      {currency.badge} {currency.string}
                    </Text>
                  </TouchableOpacity>
                )
            )}
          </View>
        </View>
      </Modal>

      <Text style={styles.amount}>{amountWithCommas}</Text>
      <TouchableOpacity onPress={() => setIsModal(true)}>
        <Text style={styles.addTransactionCurrency}>{userCurrency}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 100,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 1000,
      height: 2000,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 5,
  },
  addTransactionAmount: {
    flexDirection: "row",
    paddingBottom: normalize(10),
  },
  addTransactionCurrency: {
    fontSize: normalize(25),
    fontWeight: "200",
  },
  amount: {
    fontSize: normalize(42),
    marginRight: normalize(15),
    fontWeight: "bold",
  },
});
export default TransactionAmount;
